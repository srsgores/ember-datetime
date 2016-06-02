import Ember from "ember";
import layout from "../templates/components/time-input";
import InputtableMixin from "../mixins/inputtable";

export default Ember.Component.extend(InputtableMixin, {
	layout: layout,
	dateSupport: Ember.inject.service(),
	classNameBindings: [":time-input", "dateSupport.supportsTime"],
	needsPolyfill: false,
	type: Ember.computed(function() {
		return "time";
	}).readOnly(),
	willRender() {
		this.set("needsPolyfill", !this.get(`dateSupport.${Ember.String.camelize(`Supports ${this.get("type")}`)}`));
	}
});
