const Poll = require("../models/Poll");

const getPolls= async() => {
    const poll = await Poll.find();
    console.log("Returning polls list...");
    return poll
}

const getPoll = async (id) => {
    const poll = await Poll.findById(id);
    console.log(`Returning poll: ${id}`);
    return poll;
}

module.exports = {getPolls, getPoll};