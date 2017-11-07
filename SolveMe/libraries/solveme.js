function solve_me(p1=10,p2=20,p3=24){

  var com = [[1,1,0],[1,0,1],[0,1,1]];
  var vals = [p1,p2,p3]

  x = numeric.solve(com,vals)

  var a = x[0];
  var b = x[1];
  var c = x[2];

  return [a,b,c]

};

function call_solve_me(){
  var p1 = parseInt($('#eq1').val());
  var p2 = parseInt($('#eq2').val());
  var p3 = parseInt($('#eq3').val());

  var solution = solve_me(p1,p2,p3);
  console.log(solution);
  ship.vel = createVector(2,0);
  ship.solution = numeric.sum(solution);
  ship.weigths = 'a='+solution[0] + ' b=' + solution[1] + ' c='+solution[2];
  ship.label = "Still 42";
};
