const core = require('@actions/core');
// const wait = require('./wait');
const axios = require("axios");
const github = require("@actions/github");

// most @actions toolkit packages have async methods
async function run() {
  try {
    const prId = core.getInput('pr-id');
    core.info(`PR ID: ${prId}`);
    
    const context = github.context
    const payload = context.payload;
    core.info(`Payload: ${payload}`);

    // const response = await instance.request(requestData)
    // core.debug((new Date()).toTimeString()); // debug is only output if you set the secret `ACTIONS_RUNNER_DEBUG` to true
    // await wait(parseInt(ms));
    // core.info((new Date()).toTimeString());

    // core.setOutput('time', new Date().toTimeString());
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
