// ============== Máscaras dos inputs ==============
$('.cpf-mask').mask('999.999.999-99', {
  clearIfNotMatch: true
});

$('.cnpj-mask').mask('99.999.999/9999-99', {
  clearIfNotMatch: true
});

$('.cep-mask').mask('99999-999', {
  clearIfNotMatch: true
});

$('.tel-mask').mask('(99) 99999-9999', {
  translation: {
    'Y': {
      pattern: /[0-9]/,
      optional: true
    }
  }
});