const express = require("express");
const fs = require("fs");
const app = express();

const cors = require("cors");

const PORT = 4040;
const filePath = "../data/users.json";

function writeFileSync(filePath, data) {
  if (fs.existsSync(filePath)) {
    fs.writeFile(filePath, JSON.stringify(data), (err) => {
      if (err) console.log("Error writing file:", err);
    });
  }
}

function readFileSync(filePath) {
  if (fs.existsSync(filePath)) {
    let users = fs.readFileSync(filePath);
    return JSON.parse(users);
  } else {
    return "file not fount ";
  }
}

app.use(cors());
app.use(express.json());
app.use(require("body-parser").urlencoded({ extended: true }));

app.get("/users", (req, res) => {
  let users = readFileSync(filePath);
  res.send(users);
  res.end();
});

app.get("/user/:id", (req, res) => {
  let users = readFileSync(filePath);
  const { id } = req.params;
  let user = users.find((item) => item.id === parseInt(id));
  if (user !== undefined) {
    res.send(user);
  } else if (user == undefined) {
    res.write(" user not found ");
  }
  res.end();
});

app.post("/user", (req, res) => {
  let users = readFileSync(filePath);
  const { name, amount, credit } = req.body;

  const ids = users.map((item) => parseInt(item.id)).sort((a, b) => b - a);
  const id = ids[0] + 1;

  let newUser = {
    id: id,
    name: name ?? "name",
    amount: amount ?? 0,
    credit: credit ?? 0,
  };
  users.push(newUser);
  writeFileSync(filePath, users);
  setTimeout(() => {
    let sec = readFileSync(filePath);
    res.send(sec);

    res.end();
  }, 900);
});

app.put("/deposit/:id", (req, res) => {
  let users = readFileSync(filePath);
  const { id } = req.params;
  const { mony } = req.query;
  let monyToAdd = parseInt(mony);
  let user = users.find((item) => item.id === parseInt(id));

  if (user !== undefined) {
    if (monyToAdd > 0)
      users.map((item) =>
        item.id === user.id ? (item.amount += monyToAdd) : item
      );
  } else {
    res.send("user not found");
    res.end();
    throw new console.log("error");
  }

  writeFileSync(filePath, users);
  setTimeout(() => {
    let newUsers = readFileSync(filePath);
    res.send(newUsers);

    res.end();
  }, 900);
});

app.put("/credit", (req, res) => {
  let users = readFileSync(filePath);
  const { user: id, mony } = req.query;

  let user = users.find((item) => item.id === parseInt(id));
  if (user !== undefined) {
    if (mony > 0)
      users.map((item) =>
        item.id === user.id ? (item.credit += parseInt(mony)) : item
      );
  } else {
    res.send("user not found");
    res.end();
    throw new console.log("error");
  }

  writeFileSync(filePath, users);
  setTimeout(() => {
    let newUsers = readFileSync(filePath);
    res.send(newUsers);

    res.end();
  }, 900);
});
app.put("/getmony/:id", (req, res) => {
  let users = readFileSync(filePath);
  const { id } = req.params;
  const { mony } = req.query;

  const exist = users.some((item) => item.id == id);

  if (exist) {
    users = getmony(users, mony, id);
  }

  writeFileSync(filePath, users);
  setTimeout(() => {
    let newUsers = readFileSync(filePath);
    res.send(newUsers);

    res.end();
  }, 900);
});

app.put("/transfer", (req, res) => {
  let users = readFileSync(filePath);
  const { from, to, mony } = req.query;

  const existUserFrom = users.some((item) => item.id == from);
  const existUserTo = users.some((item) => item.id == to);

  if (existUserFrom == true && existUserTo == true && mony > 0) {
    users.map((item) => {
      if (item.id == from) {
        users = getmony(users, mony, from);
      }

      if (item.id == to) {
        item.amount += parseInt(mony);
      }

      return item;
    });
  }
  writeFileSync(filePath, users);
  setTimeout(() => {
    let newUsers = readFileSync(filePath);
    res.send(newUsers);

    res.end();
  }, 900);
}); //from - to - amount

app.listen(PORT, () => {
  console.log("server work");
});

const findUserById = (id) => {
  let users = readFileSync(filePath);
  let user = users.find((item) => item.id === parseInt(id));
  if (user !== undefined) {
    return user;
  }
};

async function writeRead(filePath, users) {
  await writeFileSync(filePath, users);
  setTimeout(() => {
    let data = readFileSync(filePath);
    return data;
  }, 900);
}

function getmony(users, mony, id) {
  users.map((item) => {
    if (item.id == id) {
      let temp = 0;

      if (item.amount > 0) {
        temp = item.amount - parseInt(mony);
        if (temp >= 0) {
          item.amount = temp;
        }
        if (temp < 0 && item.credit > temp) {
          item.amount = 0;
          item.credit = item.credit - temp;
        }
      }
      if (item.amount <= 0 && item.credit > mony) {
        item.credit = item.credit - parseInt(mony);
      }
    }

    return item;
  });
  return users;
}
