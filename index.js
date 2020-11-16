const core = require('@actions/core');
// const wait = require('./wait');
const axios = require("axios");
const { GitHub, context } = require('@actions/github');

// most @actions toolkit packages have async methods
async function run() {
  try {
    const prId = core.getInput('pr-id');
    const token = core.getInput('github-token', { required: true });

    // core.info(`PR ID: ${prId}`);
    
    const client = new GitHub(token, {});
    core.info("Created the Github client");
    if (context) {
      core.info("Got the context");
      core.info(context);
      const payload = context.payload;
      core.info("Got the payload");
      core.info(payload);
      const pr = payload.pull_request;
      core.info("Got the PR details");
      core.info(pr);
    }
    
    // const pr = context.payload.pull_request;
    // core.info(`PR: ${pr}`);

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
