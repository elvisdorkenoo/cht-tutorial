const { expect } = require('chai');

const Harness = require('cht-conf-test-harness');
const harness = new Harness({ verbose: true });

describe('Getting started tests', () => {
    before(async () => { return await harness.start(); });
    after(async () => { return await harness.stop(); });
    beforeEach(async () => { return await harness.clear(); });
    afterEach(() => { expect(harness.consoleErrors).to.be.empty; });

    const formName = 'child_health_assessment';
    it(`${formName} can be loaded`, async () => {
        await harness.loadForm(`${formName}`);
        expect(harness.state.pageContent).to.include(`id="${formName}"`);
    });

    it('integration test confirming task appears on scheduled date of child health assessment', async () => {
        // Complete a form on January 1
        await harness.setNow('2000-01-01')
        const initialResult = await harness.fillForm('child_health_assessment',  ['175', '75', 'no'], ['yes','no','']);
        expect(initialResult.errors).to.be.empty;

        // Verify a task appears on January 2
        await harness.setNow('2000-01-02');
        const tasks = await harness.getTasks();
        expect(tasks).to.have.property('length', 1);

        // Complete the task's action
        await harness.loadAction(tasks[0]);
        const followupResult = await harness.fillForm(['yes','no','no','no','no','no']);
        expect(followupResult.errors).to.be.empty;

        // Verify the task got resolved
        const actual = await harness.getTasks();
        expect(actual).to.be.empty;
    });
});

