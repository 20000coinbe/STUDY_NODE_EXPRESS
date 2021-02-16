const express = require('express');
const nunjucks = require('nunjucks');
const bodyparser = require('body-parser');
const morgan = require('morgan');


class App {
    constructor() {
        this.app = express(); 
        
        // 뷰엔진
        this.setViewEngine();

        // 미들웨어
        this.setMiddleWare();

        // 정적디렉토리
        this.setStatics();

        // 로컬변수
        this.setLocals();

        // 라우팅
        this.getRouting();

        // 404
        this.status404();

        // Error
        this.errorHandler();
    }

    setMiddleWare() {
        this.app.use(morgan('dev'));
        this.app.use(bodyparser.json());
        this.app.use(bodyparser.urlencoded({ extended: false }));
    }

    setViewEngine() {
        nunjucks.configure('templates', {
            autoescape: true,
            express: this.app
        });
    }

    setStatics() {
        this.app.use('/uploads', express.static('uploads'));
    }

    setLocals() {
        this.app.use((req, res, next) => {
            this.app.locals.isLogin = true;
            this.app.locals.req_path = req.path;
            next();
        });
    }

    getRouting() {
        this.app.use(require('./controllers'));
    }

    status404() {
        this.app.use((req, res) => {
            res.status(404).render('common/404.html');
        });
    }

    errorHandler() {
        this.app.use((err, req, res) => {
            res.status(500).render('common/500.html');
        });
    }
}

module.exports = new App().app;