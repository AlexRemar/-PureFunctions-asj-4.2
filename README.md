# Домашнее задание к лекции «Unit-тестирование»
Важно: каждая задача выполняется в виде отдельного проекта с собственным GitHub репозиторием.

Важно: ESLint не должен выдавать ошибок.

Важно: Jest должен обеспечивать 100% покрытие по строкам для тестируемых вами функций.

Важно: Ко всем задачам должен быть подключен Appveyor и выставлен бейджик статуса.

Важно: используйте import/export а не require.

## Matchers
### Легенда
Поскольку в рамках игры вы можете управлять несколькими героями, то во время "битвы" неплохо бы отображать уровень жизни, оставшейся у каждого героя в отсортированном порядке (наверху - самые здоровые). Необходимо сделать это и написать соответствующие авто-тесты.

### Описание
Дан массив с информацией о героях, например:

- [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
- ]
В отсортированном порядке должно выглядеть следующим образом:

[
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
  {name: 'мечник', health: 10},
]
Убедитесь, что toBe работать не будет, но будет работать toEqual. Изучите документацию на toBe и toEqual и выясните в чём разница (а так же термин Deep Equality). Убедитесь, что вы обеспечили 100% покрытие тестами по строкам.

[![Build status](https://ci.appveyor.com/api/projects/status/7fs05ba3udu7u43i?svg=true)](https://ci.appveyor.com/project/AlexRemar/-purefunctions-asj-4-2)
