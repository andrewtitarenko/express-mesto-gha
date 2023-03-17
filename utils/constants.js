module.exports = Object.freeze({
  BAD_REQUEST: '400',
  NOT_FOUND: '404',
  INTERNAL_SERVER_ERROR: '500',
  CREATE_CARD_INCORRECT_DATA:
    'Переданы некорректные данные при создании карточки',
  CREATE_USER_INCORRECT_DATA:
    'Переданы некорректные данные при создании пользователя',
  NOT_FOUND_USER_ID: 'Пользователь по указанному _id не найден',
  UPDATE_PROFILE_INCORRECT_DATA:
    'Переданы некорректные данные при обновлении профиля',
  NOT_FOUND_USER_WITH_ID: 'Пользователь с указанным _id не найден',
  UPDATE_AVATAR_INCORRECT_DATA:
    'Переданы некорректные данные при обновлении аватара',
  NOT_FOUND_CARD_WITH_ID: 'Карточка с указанным _id не найдена',
  LIKE_OR_DISLIKE_INCORRECT_DATA:
    'Переданы некорректные данные для постановки/ снятия лайка',
  PASSED_NON_EXISTENT_CARD_ID: 'Передан несуществующий _id карточки',
  PAGE_NOT_FOUND: 'Страница не найдена',
  SERVER_ERROR: 'Ой! Произошла ошибка на сервере',
  INVALID_CARD_ID: 'Передан невалидный _id карточки',
  INVALID_USER_ID: 'Передан невалидный _id пользователя',
});
