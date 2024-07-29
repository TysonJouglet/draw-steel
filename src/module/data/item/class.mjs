import BaseItemModel from "./base.mjs";

export default class ClassModel extends BaseItemModel {
  static metadata = Object.freeze({
    type: "class"
  });

  static LOCALIZATION_PREFIXES = [
    "DRAW_STEEL.Item.base",
    "DRAW_STEEL.Item.Class"
  ];

  static defineSchema() {
    const fields = foundry.data.fields;
    const schema = super.defineSchema();

    schema.characteristics = new fields.SchemaField({
      core: new fields.SetField(new fields.StringField({choices: CONFIG.DRAW_STEEL.characteristics, required: true}))
    });

    schema.stamina = new fields.SchemaField({
      starting: new fields.NumberField({required: true, initial: 20}),
      level: new fields.NumberField({required: true, initial: 12})
    });

    schema.skills = new fields.SchemaField({
      options: new fields.SetField(new fields.StringField({choices: this.skillOptions})),
      count: new fields.NumberField(),
      choices: new fields.SetField(new fields.StringField({blank: true, required: true, choices: this.skillChoice}))
    });

    // TODO: Copy 5e? Huge risk of changes here
    schema.advancement = new fields.ObjectField();

    return schema;
  }
}
