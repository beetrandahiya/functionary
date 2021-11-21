///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
/////////////////////////    Functionary.JS     //////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////


////////  summation function  -->  
////////  sigma ( start , end , function )
////////  the sum of terms that follow a pattern defined by 'function' 
////////////////////////////////////////////////////

function sigma(i1, i2, func) {
    i = i1;
    S = 0;
    while (i <= i2) {
        S1 = math.evaluate(func, {
            n: i
        });
        S = S + S1;
        i++;
    }
    return S;
};

////////  Product function  -->  
////////  PIM( start , end , function )
////////  the repetitive product of terms that follow a pattern defined by 'function' 
////////////////////////////////////////////////////

function PIM(i1, i2, func) {
    i = i1;
    P = 1;
    while (i <= i2) {
        P1 = math.evaluate(func, {
            n: i
        });
        P = P * P1;
        i++;
    }
    return P;
};

////////  beta function  -->  
////////  beta ( x , y )
////////  the beta function, also called the Euler integral of the first kind,
//        is a special function that is closely related 
//        to the gamma function and to binomial coefficients.
/// link  : https://en.wikipedia.org/wiki/Beta_function
////////////////////////////////////////////////////

function beta(x,y){
    B=math.evaluate('(gamma(x)*gamma(y))/(gamma(x+y))',{x:x,y:y});
    return B;
    
};


////////  RandomPolynomial function  -->  
////////  randpoly( degree , decimal points in coefficients)
////////  return as polynomial expression of a paticualar degree 
////////////////////////////////////////////////////

function randpoly(n,p){
    a0 = math.random(0,10).toFixed(p);
    fn=String(a0);
    for(i=1;i<=n;i++){
        a=math.random(0,10).toFixed(p);
        fn=fn+String('+ ( '+a+' * '+'x^'+i+' ) ');
    }
    return fn;
}

////////  Fractional Part function  -->  
////////  fracprt( x )
////////  return as the fractional part of the number
////////////////////////////////////////////////////
function fracprt(x){
    return x - math.floor(x)
}

////////  Euler Form   -->  
////////  euler( z )
////////  return euler form of the complex number e^i(p)=cos(p)+i*sin(p)    //euler's theorem
////////////////////////////////////////////////////

function euler(z){
    z=math.evaluate(z);
    p=math.atan(math.im(z)/math.re(z));
    r=math.abs(z);
    return String(r+'*e^(i*'+p+')')

}

////////  Rotate a complex number   -->  
////////  rotcomplex( z , theta:RADIANS)
////////  return the final complex number if z is rotated by theta in +ve counter clockwise direction
////////////////////////////////////////////////////

function rotcomplex(z,theta){
    z=math.evaluate(z);
    r=math.abs(z);
    p=math.atan(math.im(z)/math.re(z));
    p=p+theta
    s=String(r+'*e^(i*'+p+')')
    return math.evaluate(s);

}


//////////////// import all functions to mathjs /////////////////////////


math.import({
    sigma: sigma,
    PIM:PIM,
    beta:beta,
    randpoly:randpoly,
    fracprt:fracprt,
    euler:euler,
    rotcomplex: rotcomplex
});

