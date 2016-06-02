import Ember from "ember";

export default Ember.Service.extend({
	// borrowed from https://github.com/brianblakely/nodep-date-input-polyfill/blob/master/input.js#L103
	supportsInputType(type) {
		const input = document.createElement("input");
		input.setAttribute("type", type);
		const notADateValue = "not-a-date-or-time";
		input.setAttribute("value", notADateValue);
		return !(input.value === notADateValue);
	},
	init() {
		const types = ["date", "datetime-local", "time", "week", "month"];
		types.forEach((type) => {
			this.set(Ember.String.camelize(`Supports ${type}`), this.supportsInputType(type));
		});
	}
});
