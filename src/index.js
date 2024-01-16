const express = require('express');

const app = express();

app.get("/courses",(request, response) =>{
  return response.json(["curso 1","curso2","curso 3"]);
})

app.post("/courses",(request,response) =>{
  return response.json(["curso 1","curso2","curso 3","curso 4"]);
});

app.put("/courses/:id",(request,response) =>{
  const {id} = request.params;
  console.log(id);
  return response.json(["curso 8","curso2","curso 3","curso 4"]);
});

app.delete("/courses/:id",(request,response) =>{
  return response.json(["curso 8","curso2","curso 3","curso 4"]);
});

app.listen(3333);
