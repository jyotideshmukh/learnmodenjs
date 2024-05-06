'use strict';

import { users, currentuser} from "./users.js";
import helper from "./helper.js";

document.getElementById('output').innerHTML = users[currentuser].name;

let usersEmails = users.map(f => f.email);

document.getElementById('output').innerHTML += "<br>"+helper(usersEmails).join(",");