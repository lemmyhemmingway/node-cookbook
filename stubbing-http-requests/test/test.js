const test = require("tape");
const github = require("../github");

test("get github user by username", async (t) => {
    t.plan(3);
    const githubUser = await github.getGithubUser("octokit");

    t.equal(githubUser.login, "octokit")
    t.equal(githubUser.name, "octokit")
})