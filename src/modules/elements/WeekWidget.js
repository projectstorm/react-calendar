var React = require("react");
/**
 * @author Dylan Vorster
 */
module.exports = React.createClass({
	displayName: "WeekWidget",
	getDefaultProps: function(){
		return {
			days: []
		};
	},
	render: function(){
		return (
			React.DOM.div({className:'storm-calendar-week'},this.props.days)
		);
	}
});