const Form = require("./Form")
// @ponicode
describe("Form.default", () => {
    test("0", () => {
        let callFunction = () => {
            Form.default()
        }
    
        expect(callFunction).not.toThrow()
    })
})
