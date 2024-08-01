import BaseItemModel from "./base.mjs";

export default class AbilityModel extends BaseItemModel {
  static metadata = Object.freeze({
    type: "ability"
  });

  static LOCALIZATION_PREFIXES = [
    "DRAW_STEEL.Item.base",
    "DRAW_STEEL.Item.Ability"
  ];

  static defineSchema() {
    const fields = foundry.data.fields;
    const schema = super.defineSchema();
    const config = CONFIG.DRAW_STEEL.abilities;

    schema.keywords = new fields.SetField(new fields.StringField({required: true, blank: false, choices: config.keywords}));
    schema.type = new fields.StringField();
    schema.distance = new fields.StringField(); // WIP
    schema.trigger = new fields.StringField();
    schema.target = new fields.StringField();
    schema.powerRoll = new fields.ObjectField(); // WIP
    schema.effect = new fields.StringField(); // WIP
    schema.spend = new fields.NumberField();

    return schema;
  }

  static itemDescription() {
    const description = super.itemDescription();
    description.flavor = new foundry.data.fields.StringField({required: true, blank: true});
    return description;
  }
}
