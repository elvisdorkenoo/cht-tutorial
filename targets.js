module.exports = [

  // % FOLLOW-UP CHILD HEALTH THIS MONTH
  {
    id: 'follow-up-child-health-rate-this-month',
    type: 'percent',
    icon: 'medic-health-facility',
    goal: 80,
    translation_key: 'Follow-up Child Health',
    subtitle_translation_key: 'This month',
    appliesTo: 'reports',
    idType: 'report',
    appliesToType: ['followup_child_health'],
    appliesIf: function (contact, report) {
      // eslint-disable-next-line no-console
      console.log('passesIf', report);
      return contact.reports.includes(report);
    },
    passesIf: function (contact, report) {
      return contact.reports.includes(report) && report.fields.danger_signs.visit_confirm ==='yes';
    },
    date: 'reported',
  },

  // CHILD ASSESSMENT THIS MONTH
  {
    id: 'child-assessment-this-month',
    type: 'count',
    icon: 'icon-infant',
    goal: -1,
    translation_key: 'Child Assessment',
    subtitle_translation_key: 'This month',
    appliesTo: 'reports',
    idType: 'report',
    appliesToType: ['child_health_assessment'],
    appliesIf: function (contact, report) {
      return contact.reports.includes(report);
    },
    date: 'reported',
  },
];

