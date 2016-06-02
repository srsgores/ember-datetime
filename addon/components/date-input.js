import Ember from "ember";
import InputtableMixin from "../mixins/inputtable";

import layout from "../templates/components/date-input";

export default Ember.Component.extend(InputtableMixin, {
	dateSupport: Ember.inject.service(),
	classNameBindings: ["containerClass", "dateSupport.supportsDate", "dateSupport.supportsDatetimeLocal"],
	containerClass: "date-input-container",
	range: null,
	local: false,
	needsPolyfill: false,
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
	willRender() {
		if (this.get("range")) {
			Ember.assert(`Date-input recieved range of ${this.get("range")}, but expected ranges "week" or "month"`, this.get("range") === "month" || this.get("range") === "week");
		}
		this.set("needsPolyfill", !this.get(`dateSupport.${Ember.String.camelize(`Supports ${this.get("type")}`)}`));
	},
	layout: layout
});
