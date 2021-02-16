exports.get_admin = (req, res) => {
    res.send('admin 이후 URL')
}

exports.get_products = (req, res) => {
    // res.send('Router를 이용한 처리 : admin이후의 주소만 써주면 된다');
    res.render('admin/products.html', {
        message: "render()를 통해서 templates에 뿌린다",
        online: "express 공부중"
    });
}

exports.get_products_write = (req, res) => {
    res.render('admin/write.html');
}

exports.post_products_write = (req, res) => {
    res.send(req.body);
}

