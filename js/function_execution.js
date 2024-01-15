function A(){
  console.log('Im in A');
}

function B(){
  A();
}
function C(){
  B();
  B();
}

function D(){
  C();
  A();
}

D();