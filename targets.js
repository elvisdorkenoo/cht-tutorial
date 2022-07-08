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
    appliesIf: true,
    passesIf: true,
    date: 'now',
  },

  // CHILD ASSESSMENT THIS MONTH
  {
    id: 'child-assessment-this-month',
    type: 'count',
    icon: 'infant',
    goal: -1,
    translation_key: 'Child Assessment',
    subtitle_translation_key: 'This month',
    appliesTo: 'reports',
    idType: 'report',
    appliesIf: true,
    date: 'reported',
  },
];

