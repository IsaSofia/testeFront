// Máscaras dos inputs
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

// Verifica se senhas são iguais
function validarSenha(senha, senhaConfirma)
{
    var senha1 = document.getElementById(senha).value;
    var senha2 = document.getElementById(senhaConfirma).value;
		
    if (senha1 != senha2)
    {
      	alert('Senhas diferentes!');
    }
}

// Verificar se o checkBox foi selecionado
$('.btn-cadastrar').click(function() {
  if ($('.form-check-input').is(':checked') === false) {
    alert('Marque o checkbox!');
  }
});