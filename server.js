const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();

const secretKey = 's3gr3d0';

server.use(jsonServer.bodyParser);
server.use(middlewares);

const db = router.db;

server.post('/login', (req, res) => {
    const { email, senha } = req.body;
    const user = db.get('users').find({ email, senha }).value();
    const com_cadastro = db.get('users').some({ email }).value();

    if(user) {
        const token = jwt.sign({ email, id: user.id }, secretKey, { expiresIn: 10});
        res.status(200).json({ token });
    } else if(com_cadastro) {
        res.status(401).json({ error: 'Dados inválidos! Favor, verifique todos os dados!'});
    } else {
        res.status(401).json({ error: 'Usuário não cadastrado!'});
    }
});

server.get('/verificar-token', (req, res) => {
    const token = req.headers.authorization;
    if(!token) {
        res.status(401).json({ isValid: false })
        return;
    }

    const tokenValue = token.replace('Bearer ', '');

    jwt.verify(tokenValue, secretKey, (err, decoded) => {
        if(err) {
            res.status(401).json({ isValid: false });
        } else {
            res.status(200).json({ isValid: true });
        }
    });
});

server.get('/perfis', (req, res) => {
    const fullToken = req.headers.authorization;
    const token = fullToken.split(' ')[1];
    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            res.status(401).json({ error: 'Token inválido' });
            // res.status(403).json({ error: 'Token inválido' });
        } else {
            const userId = decoded.id; // ID do usuário obtido a partir do token

            // Verificação de perfil diretamente no código do servidor
            const perfil = db.get('perfis').find({ id: userId }).value();

            if (perfil) {
                // Se o perfil existir, retorne o perfil
                res.status(200).json({ perfil: perfil });
            } else {
                // Se o perfil não existir, retorne uma mensagem indicando que o usuário não tem perfil
                // res.status(401).json({ error: 'Usuário não tem perfil cadastrado' });
                res.status(200).json({ mensagem: 'Usuário não tem perfil cadastrado' });
            }
        }
    });
});

server.use(router);

server.listen(3200, () => {
    console.log('JSON Server is running on port 3200');
    // para executar: node server
});