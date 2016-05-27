import Ember from "ember";

export default Ember.TextField.extend({
	dateSupport: Ember.inject.service(),
	classNameBindings: ["type", ":date-input", "dateSupport.supportsDate", "dateSupport.supportsDatetimeLocal"],
	type: Ember.computed("local", "range", function() {
		if (this.get("local")) {
			return "datetime-local";
		}
		else if (this.get("range") === "month" || this.get("range") === "week") {
			return this.get("range");
		}
		else {
			return "date";
		}
	}).readOnly(),
	local: false,
	range: null, /* Either week or month */
	willRender() {
		if (!this.get(`dateSupport.${Ember.String.camelize(`Supports ${this.get("type")}`)}`)) {
			// support not here; fall back
		}
	}
});
