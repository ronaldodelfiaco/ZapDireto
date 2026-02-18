function sendWhatsApp() {
  let phone = document.getElementById("phone").value;

  // Remove tudo que não for número
  phone = phone.replace(/\D/g, '');

  if (phone.length < 10) {
    alert("Digite um número válido com DDD.");
    return;
  }

  // Adiciona código do Brasil se não tiver
  if (!phone.startsWith("55")) {
    phone = "55" + phone;
  }

  const url = `https://wa.me/${phone}`;

  window.open(url, '_blank');
}
