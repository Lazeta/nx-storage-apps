export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // новая функциональность
        'fix', // исправление бага
        'docs', // документация
        'style', // форматирование, без изменений логики
        'refactor', // рефакторинг
        'test', // тесты
        'chore', // рутина (обновление deps, конфигов)
        'ci', // CI/CD
        'perf', // оптимизация производительности
        'revert', // откат коммита
      ],
    ],
    'scope-case': [2, 'always', 'kebab-case'],
    'subject-max-length': [2, 'always', 100],
  },
}
