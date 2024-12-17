function status(request, response) {
  response.status(200).json({ Key: "Learning one percent  each day!" });
}

export default status;
