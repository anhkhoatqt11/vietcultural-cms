import * as migration_20250416_112634_first_migration from './20250416_112634_first_migration';
import * as migration_20250416_113418_init_migrations from './20250416_113418_init_migrations';

export const migrations = [
  {
    up: migration_20250416_112634_first_migration.up,
    down: migration_20250416_112634_first_migration.down,
    name: '20250416_112634_first_migration',
  },
  {
    up: migration_20250416_113418_init_migrations.up,
    down: migration_20250416_113418_init_migrations.down,
    name: '20250416_113418_init_migrations'
  },
];
