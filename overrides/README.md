# overrides

Changes on top of the unmodified `cdda/` copy, as CDDA-format JSON arrays.

- A new id with `copy-from` inherits the CDDA object it names.
- An existing id without `copy-from` is a patch: the listed fields replace the CDDA fields, and `relative`,
  `proportional`, `extend` and `delete` are applied on top.
