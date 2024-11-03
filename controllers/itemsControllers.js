exports.resolveEquacao = (req, res) => {

    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    const c = parseFloat(req.query.c);


    if (a(isNaN) || b(isNaN) || c(isNaN)){
        return res.status(400).send('Por favor, forneça valores numéricos válidos para a, b e c.');
  }
    
const calcdelta = b * b - 4 * a * c

if (calcdelta > 0 ){
    const raiz1 = (-b + Math.sqrt(calcdelta) / (2 * a));
    const raiz2 = (-b - Math.sqrt(calcdelta) / (2 * a));
}

if(calcdelta == 0){
    const raiz = -b / (2 * a);
}

}