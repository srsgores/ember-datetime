import Ember from "ember";

export default Ember.TextField.extend({
	dateSupport: Ember.inject.service(),
	classNameBindings: [":time-input", "dateSupport.supportsTime"],
	type: Ember.computed(function() {
		return "time";
	}).readOnly(),
	willRender() {
		if (!this.get(`dateSupport.${Ember.String.camelize(`Supports ${this.get("type")}`)}`)) {
			// support not here; fall back
		}
	}
});
