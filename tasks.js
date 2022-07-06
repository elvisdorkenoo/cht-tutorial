const extras = require('./nools-extras');

const {
  getField
} = extras;

module.exports = [
  {
    name: 'followup-child-health',
    icon: 'icon-follow-up',
    title: 'Follow-up Child Health',
    appliesTo: 'reports',
    appliesToType: ['child_health_assessment'],
    actions: [
      {
        type: 'report',
        form: 'followup_child_health',
        modifyContent: function(content, contact, report) {
          content.patient_uuid = getField(report, 'patient_uuid');
        }
      }
    ],
    events: [
      {
        id: 'followup-child-health-event',
        start: 3,
        end: 0,
        days: 3
      }
    ]
  },

];
