function takeANumber(line, name) {
  var newName = line.push(name);
  return (`Welcome, ${newName}. You are number ${line.length} in line.`);
}

function nowServing(line) {
  if (line.length === 0 ) {
    return "There is nobody waiting to be served!";
  } else {
    var name = line.shift();
    return (`Currently serving ${name}.`);
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  }

  var lineString = "The line is currently: ";

  for (let i = 0; i < line.length; i++) {
    if (i === 0) {
      lineString = lineString + "1. " + line[i];
    } else {
      lineString = lineString + ", " + (i + 1) + ". " + line[i];
    }
  }

  return lineString;
}
