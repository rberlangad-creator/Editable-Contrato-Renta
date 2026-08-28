// JavaScript Logic for Interactive Contract Editor & Auto-Calculator

// Original Equipment Inventory Dataset (83 Items)
const originalEquipmentData = [
  { no: 1, marca: "Heli", modelo: "CQD18X1-GB2R", serie: "07018DK0950", cat: "Forklift", desc: "Hombre parado (4 Ruedas)", energia: "Electric", cargador: "480V", mensual: 1195.63 },
  { no: 2, marca: "Heli", modelo: "CQD18X1-GB2R", serie: "07018DK0951", cat: "Forklift", desc: "Hombre parado (4 Ruedas)", energia: "Electric", cargador: "480V", mensual: 1195.63 },
  { no: 3, marca: "Heli", modelo: "CQD18X1-GB2R", serie: "07018DN0555", cat: "Forklift", desc: "Hombre parado (4 Ruedas)", energia: "Electric", cargador: "480V", mensual: 1195.63 },
  { no: 4, marca: "Heli", modelo: "CQD18X1-GB2R", serie: "07018DL4278", cat: "Forklift", desc: "Hombre parado (4 Ruedas)", energia: "Electric", cargador: "480V", mensual: 1195.63 },
  { no: 5, marca: "Heli", modelo: "CQD18X1-GB2R", serie: "07018DG0170", cat: "Forklift", desc: "Hombre parado (4 Ruedas)", energia: "Electric", cargador: "480V", mensual: 1195.63 },
  { no: 6, marca: "Heli", modelo: "CQD18X1-GB2R", serie: "07018DL4280", cat: "Forklift", desc: "Hombre parado (4 Ruedas)", energia: "Electric", cargador: "480V", mensual: 1195.63 },
  { no: 7, marca: "Heli", modelo: "CQD18X1-GB2R", serie: "07018DP3498", cat: "Forklift", desc: "Hombre parado (4 Ruedas)", energia: "Electric", cargador: "480V", mensual: 1195.63 },
  { no: 8, marca: "Heli", modelo: "CQD18X1-GB2R", serie: "07018DK0952", cat: "Forklift", desc: "Hombre parado (4 Ruedas)", energia: "Electric", cargador: "480V", mensual: 1195.63 },
  { no: 9, marca: "Heli", modelo: "CQD18X1-GB2R", serie: "07018DL8770", cat: "Forklift", desc: "Hombre parado (4 Ruedas)", energia: "Electric", cargador: "480V", mensual: 1195.63 },
  { no: 10, marca: "Heli", modelo: "CQD18X1-GB2R", serie: "07018DM6073", cat: "Forklift", desc: "Hombre parado (4 Ruedas)", energia: "Electric", cargador: "480V", mensual: 1195.63 },
  { no: 11, marca: "Heli", modelo: "CQD18X1-GB2R", serie: "07018DM1919", cat: "Forklift", desc: "Hombre parado (4 Ruedas)", energia: "Electric", cargador: "480V", mensual: 1195.63 },
  { no: 12, marca: "Heli", modelo: "CQD18X1-GB2R", serie: "07018DL4279", cat: "Forklift", desc: "Hombre parado (4 Ruedas)", energia: "Electric", cargador: "480V", mensual: 1195.63 },
  { no: 13, marca: "Heli", modelo: "CQD18X1-GB2R", serie: "07018DK0282", cat: "Forklift", desc: "Hombre parado (4 Ruedas)", energia: "Electric", cargador: "480V", mensual: 1195.63 },
  { no: 14, marca: "Heli", modelo: "CQD18X1-GB2R", serie: "07018DM8533", cat: "Forklift", desc: "Hombre parado (4 Ruedas)", energia: "Electric", cargador: "480V", mensual: 1195.63 },
  { no: 15, marca: "Heli", modelo: "CQD18X1-GB2R", serie: "07018DP6199", cat: "Forklift", desc: "Hombre parado (4 Ruedas)", energia: "Electric", cargador: "480V", mensual: 1195.63 },
  { no: 16, marca: "Heli", modelo: "CQD18X1-GB2RLI", serie: "Por Asignar", cat: "Forklift", desc: "Hombre parado (4 Ruedas)", energia: "Electric", cargador: "480V", mensual: 1195.63 },
  { no: 17, marca: "Heli", modelo: "CQD18X1-GB2RLI", serie: "Por Asignar", cat: "Forklift", desc: "Hombre parado (4 Ruedas)", energia: "Electric", cargador: "480V", mensual: 1195.63 },
  { no: 18, marca: "Heli", modelo: "CQD18X1-GB2RLI", serie: "Por Asignar", cat: "Forklift", desc: "Hombre parado (4 Ruedas)", energia: "Electric", cargador: "480V", mensual: 1195.63 },
  { no: 19, marca: "Heli", modelo: "CQD18X1-GB2RLI", serie: "Por Asignar", cat: "Forklift", desc: "Hombre parado (4 Ruedas)", energia: "Electric", cargador: "480V", mensual: 1195.63 },
  { no: 20, marca: "Heli", modelo: "CQD18X1-GB2RLI", serie: "Por Asignar", cat: "Forklift", desc: "Hombre parado (4 Ruedas)", energia: "Electric", cargador: "480V", mensual: 1195.63 },
  { no: 21, marca: "Heli", modelo: "CQD18X1-GB2RLI", serie: "Por Asignar", cat: "Forklift", desc: "Hombre parado (4 Ruedas)", energia: "Electric", cargador: "480V", mensual: 1195.63 },
  { no: 22, marca: "Heli", modelo: "CQD25-GC2RLI", serie: "07025DM8408", cat: "Forklift", desc: "Hombre parado (4 Ruedas)", energia: "Electric", cargador: "480V", mensual: 1195.63 },
  { no: 23, marca: "Heli", modelo: "CPD20SQ-GE2LI", serie: "06020DJ9713", cat: "Forklift", desc: "Hombre sentado (3 Ruedas)", energia: "Electric", cargador: "480V", mensual: 846.25 },
  { no: 24, marca: "Heli", modelo: "CPD20SQ-GE2LI", serie: "06020DJ9714", cat: "Forklift", desc: "Hombre sentado (3 Ruedas)", energia: "Electric", cargador: "480V", mensual: 846.25 },
  { no: 25, marca: "Heli", modelo: "CPD20SQ-GE2LI", serie: "06020DJ9715", cat: "Forklift", desc: "Hombre sentado (3 Ruedas)", energia: "Electric", cargador: "480V", mensual: 846.25 },
  { no: 26, marca: "Heli", modelo: "CPD20SQ-GE2LI", serie: "06020DJ8608", cat: "Forklift", desc: "Hombre sentado (3 Ruedas)", energia: "Electric", cargador: "480V", mensual: 846.25 },
  { no: 27, marca: "Heli", modelo: "CPD20SQ-GE2LI", serie: "06020DL9917", cat: "Forklift", desc: "Hombre sentado (3 Ruedas)", energia: "Electric", cargador: "480V", mensual: 846.25 },
  { no: 28, marca: "Heli", modelo: "CPD20SQ-GE2LI", serie: "06020DJ9716", cat: "Forklift", desc: "Hombre sentado (3 Ruedas)", energia: "Electric", cargador: "480V", mensual: 846.25 },
  { no: 29, marca: "Heli", modelo: "CPD20SQ-GE1LI", serie: "06020DG7883", cat: "Forklift", desc: "Hombre sentado (3 Ruedas)", energia: "Electric", cargador: "480V", mensual: 846.25 },
  { no: 30, marca: "Heli", modelo: "QYD45S-L3G2LI", serie: "22045YB7980", cat: "Tugger Train", desc: "Carro de arrastre", energia: "Electric", cargador: "480V", mensual: 350.00 },
  { no: 31, marca: "Heli", modelo: "QYD45S-L3G2LI", serie: "22045YB0850", cat: "Tugger Train", desc: "Carro de arrastre", energia: "Electric", cargador: "480V", mensual: 350.00 },
  { no: 32, marca: "Heli", modelo: "QYD45S-L3G2LI", serie: "22045YB9825", cat: "Tugger Train", desc: "Carro de arrastre", energia: "Electric", cargador: "480V", mensual: 350.00 },
  { no: 33, marca: "Heli", modelo: "QYD45S-L3G2LI", serie: "Por Asignar", cat: "Tugger Train", desc: "Carro de arrastre", energia: "Electric", cargador: "480V", mensual: 350.00 },
  { no: 34, marca: "Heli", modelo: "CQD18X1-GB2RLI", serie: "07018DS6878", cat: "Forklift", desc: "Hombre parado (4 Ruedas)", energia: "Electric", cargador: "480V", mensual: 1195.63 },
  { no: 35, marca: "Heli", modelo: "CPD25-GB2LI-M", serie: "05025DK8209", cat: "Forklift", desc: "Hombre parado (4 Ruedas)", energia: "Electric", cargador: "480V", mensual: 1212.00 },
  { no: 36, marca: "Mima", modelo: "20SE", serie: "Por Asignar", cat: "Forklift", desc: "Montacargas Articulado", energia: "Electric", cargador: "480V", mensual: 1820.00 },
  { no: 37, marca: "CHL", modelo: "CPQD25-RC1K2C", serie: "030253F1077", cat: "Forklift", desc: "Hombre sentado (4 Ruedas)", energia: "Gas LP", cargador: "220V", mensual: 850.00 },
  { no: 38, marca: "CHL", modelo: "CPQD25-RC1K2C", serie: "030253M5490", cat: "Forklift", desc: "Hombre sentado (4 Ruedas)", energia: "Gas LP", cargador: "220V", mensual: 850.00 },
  { no: 39, marca: "CHL", modelo: "CPQD25-RC1K2C", serie: "030253J2458", cat: "Forklift", desc: "Hombre sentado (4 Ruedas)", energia: "Gas LP", cargador: "220V", mensual: 850.00 },
  { no: 40, marca: "CHL", modelo: "CPQD25-RC1K2C", serie: "030253N7214", cat: "Forklift", desc: "Hombre sentado (4 Ruedas)", energia: "Gas LP", cargador: "220V", mensual: 850.00 },
  { no: 41, marca: "CHL", modelo: "CPQD25-RC1K2C", serie: "030253J2460", cat: "Forklift", desc: "Hombre sentado (4 Ruedas)", energia: "Gas LP", cargador: "220V", mensual: 850.00 },
  { no: 42, marca: "CHL", modelo: "CQD14X2-GC2RLI", serie: "07014DN5357", cat: "Forklift", desc: "Hombre parado (4 Ruedas)", energia: "Electric", cargador: "220V", mensual: 1300.00 },
  { no: 43, marca: "CHL", modelo: "CQD15X2", serie: "07015DP8953", cat: "Forklift", desc: "Hombre parado (4 Ruedas)", energia: "Electric", cargador: "220V", mensual: 1300.00 },
  { no: 44, marca: "CHL", modelo: "CQD15X2", serie: "07015DP9073", cat: "Forklift", desc: "Hombre parado (4 Ruedas)", energia: "Electric", cargador: "220V", mensual: 1300.00 },
  { no: 45, marca: "CHL", modelo: "CBD20J-LI3", serie: "08015JZ9123", cat: "Pallet Jack", desc: "Patín Eléctrico", energia: "Electric", cargador: "220V", mensual: 600.00 },
  { no: 46, marca: "CHL", modelo: "CBD20J-LI3", serie: "08015JZ9146", cat: "Pallet Jack", desc: "Patín Eléctrico", energia: "Electric", cargador: "220V", mensual: 600.00 },
  { no: 47, marca: "CHL", modelo: "CPQD25", serie: "030253J2457", cat: "Forklift", desc: "Hombre sentado (4 Ruedas)", energia: "Gas LP", cargador: "220V", mensual: 850.00 },
  { no: 48, marca: "CHL", modelo: "CPQD25", serie: "030253J2459", cat: "Forklift", desc: "Hombre sentado (4 Ruedas)", energia: "Gas LP", cargador: "220V", mensual: 850.00 },
  { no: 49, marca: "CHL", modelo: "CPD25-A3LIH4C-M", serie: "05025DN8221", cat: "Forklift", desc: "Hombre sentado (4 Ruedas)", energia: "Electric", cargador: "220V", mensual: 1200.00 },
  { no: 50, marca: "CHL", modelo: "CPD25-A3LIH4C-M", serie: "05025DN8222", cat: "Forklift", desc: "Hombre sentado (4 Ruedas)", energia: "Electric", cargador: "220V", mensual: 1200.00 },
  { no: 51, marca: "CHL", modelo: "CPD25-A3LIH4C-M", serie: "05025DN8223", cat: "Forklift", desc: "Hombre sentado (4 Ruedas)", energia: "Electric", cargador: "220V", mensual: 1200.00 },
  { no: 52, marca: "CHL", modelo: "CPD25-A3LIH4C-M", serie: "05025DN8224", cat: "Forklift", desc: "Hombre sentado (4 Ruedas)", energia: "Electric", cargador: "220V", mensual: 1200.00 },
  { no: 53, marca: "CHL", modelo: "CPD25-A3LIH4C-M", serie: "05025DN8225", cat: "Forklift", desc: "Hombre sentado (4 Ruedas)", energia: "Electric", cargador: "220V", mensual: 1200.00 },
  { no: 54, marca: "CHL", modelo: "CQD14X2", serie: "07014DM8735", cat: "Forklift", desc: "Hombre parado (4 Ruedas)", energia: "Electric", cargador: "220V", mensual: 1300.00 },
  { no: 55, marca: "CHL", modelo: "CQD14X2", serie: "07014DM9054", cat: "Forklift", desc: "Hombre parado (4 Ruedas)", energia: "Electric", cargador: "220V", mensual: 1300.00 },
  { no: 56, marca: "CHL", modelo: "CQD14X2", serie: "07014DN5358", cat: "Forklift", desc: "Hombre parado (4 Ruedas)", energia: "Electric", cargador: "220V", mensual: 1300.00 },
  { no: 57, marca: "CHL", modelo: "CQD14X2", serie: "07014DN5361", cat: "Forklift", desc: "Hombre parado (4 Ruedas)", energia: "Electric", cargador: "220V", mensual: 1300.00 },
  { no: 58, marca: "CHL", modelo: "CQD14X2", serie: "07014DR6161", cat: "Forklift", desc: "Hombre parado (4 Ruedas)", energia: "Electric", cargador: "220V", mensual: 1300.00 },
  { no: 59, marca: "CHL", modelo: "CPD25-A3LIH4C-M", serie: "07014DR6162", cat: "Forklift", desc: "Hombre parado (4 Ruedas)", energia: "Electric", cargador: "220V", mensual: 1300.00 },
  { no: 60, marca: "CHL", modelo: "CQD14X2", serie: "07014DR6163", cat: "Forklift", desc: "Hombre parado (4 Ruedas)", energia: "Electric", cargador: "220V", mensual: 1300.00 },
  { no: 61, marca: "CHL", modelo: "CQD14X2", serie: "07014DR6164", cat: "Forklift", desc: "Hombre parado (4 Ruedas)", energia: "Electric", cargador: "220V", mensual: 1300.00 },
  { no: 62, marca: "CHL", modelo: "CQD14X2", serie: "07014DR6165", cat: "Forklift", desc: "Hombre parado (4 Ruedas)", energia: "Electric", cargador: "220V", mensual: 1300.00 },
  { no: 63, marca: "CHL", modelo: "CQD14X2", serie: "07014DR6166", cat: "Forklift", desc: "Hombre parado (4 Ruedas)", energia: "Electric", cargador: "220V", mensual: 1300.00 },
  { no: 64, marca: "CHL", modelo: "CQD15X2", serie: "07015DP8831", cat: "Forklift", desc: "Hombre parado (4 Ruedas)", energia: "Electric", cargador: "220V", mensual: 1300.00 },
  { no: 65, marca: "CHL", modelo: "CQD15X2", serie: "07015DP8954", cat: "Forklift", desc: "Hombre parado (4 Ruedas)", energia: "Electric", cargador: "220V", mensual: 1300.00 },
  { no: 66, marca: "CHL", modelo: "CQD15X2", serie: "07015DP8955", cat: "Forklift", desc: "Hombre parado (4 Ruedas)", energia: "Electric", cargador: "220V", mensual: 1300.00 },
  { no: 67, marca: "CHL", modelo: "QYD45S-LF3", serie: "22045YC0574", cat: "Tugger Train", desc: "Carro de arrastre", energia: "Electric", cargador: "220V", mensual: 500.00 },
  { no: 68, marca: "CHL", modelo: "QYD45S-LF3", serie: "22045YC0577", cat: "Tugger Train", desc: "Carro de arrastre", energia: "Electric", cargador: "220V", mensual: 500.00 },
  { no: 69, marca: "CHL", modelo: "QYD45S-LF3", serie: "22045YC0578", cat: "Tugger Train", desc: "Carro de arrastre", energia: "Electric", cargador: "220V", mensual: 500.00 },
  { no: 70, marca: "CHL", modelo: "QYD45S-LF3", serie: "22045YC0579", cat: "Tugger Train", desc: "Carro de arrastre", energia: "Electric", cargador: "220V", mensual: 500.00 },
  { no: 71, marca: "CHL", modelo: "QYD45S-LF3", serie: "22045YC0576", cat: "Tugger Train", desc: "Carro de arrastre", energia: "Electric", cargador: "220V", mensual: 500.00 },
  { no: 72, marca: "CHL", modelo: "QYD45S-LF3", serie: "22045YC3253", cat: "Tugger Train", desc: "Carro de arrastre", energia: "Electric", cargador: "220V", mensual: 500.00 },
  { no: 73, marca: "CHL", modelo: "QYD45S-LF3", serie: "22045YB7886", cat: "Tugger Train", desc: "Carro de arrastre", energia: "Electric", cargador: "440V", mensual: 500.00 },
  { no: 74, marca: "CHL", modelo: "QYD45S-LF3", serie: "22045YB7691", cat: "Tugger Train", desc: "Carro de arrastre", energia: "Electric", cargador: "440V", mensual: 500.00 },
  { no: 75, marca: "CHL", modelo: "CPQD25", serie: "030253J2461", cat: "Forklift", desc: "Hombre sentado (4 Ruedas)", energia: "Gas LP", cargador: "220V", mensual: 850.00 },
  { no: 76, marca: "CHL", modelo: "CPQD25N", serie: "030253E6783", cat: "Forklift", desc: "Hombre sentado (4 Ruedas)", energia: "Gas LP", cargador: "220V", mensual: 850.00 },
  { no: 77, marca: "CHL", modelo: "CPQD25N", serie: "030253F2163", cat: "Forklift", desc: "Hombre sentado (4 Ruedas)", energia: "Gas LP", cargador: "220V", mensual: 850.00 },
  { no: 78, marca: "CHL", modelo: "CQD14X2-GC2RLI", serie: "07014DM8734", cat: "Forklift", desc: "Hombre parado (4 Ruedas)", energia: "Electric", cargador: "220V", mensual: 1300.00 },
  { no: 79, marca: "Hangcha", modelo: "CPD25-AC3", serie: "H1BB39089", cat: "Forklift", desc: "Hombre sentado (4 Ruedas)", energia: "Electric", cargador: "220V", mensual: 1000.00 },
  { no: 80, marca: "Crown", modelo: "WAV 60-118", serie: "10170031", cat: "Pallet Stacker", desc: "Estibador Eléctrico", energia: "Electric", cargador: "110V", mensual: 748.00 },
  { no: 81, marca: "Crown", modelo: "WAV 60-118", serie: "Por Asignar", cat: "Pallet Stacker", desc: "Estibador Eléctrico", energia: "Electric", cargador: "110V", mensual: 748.00 },
  { no: 82, marca: "Crown", modelo: "WAV 60-118", serie: "Por Asignar", cat: "Pallet Stacker", desc: "Estibador Eléctrico", energia: "Electric", cargador: "110V", mensual: 748.00 },
  { no: 83, marca: "Crown", modelo: "WAV 60-118", serie: "Por Asignar", cat: "Pallet Stacker", desc: "Estibador Eléctrico", energia: "Electric", cargador: "110V", mensual: 748.00 }
];

let isEditMode = true;

// Format Currency Utility
function formatCurrency(val) {
  return "$" + parseFloat(val).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// Parse Float Utility from Currency String
function parseCurrency(str) {
  if (typeof str === 'number') return str;
  return parseFloat(str.replace(/[^0-9.-]+/g, "")) || 0;
}

// Render Table Rows
function renderEquipmentTable(data) {
  const tbody = document.getElementById('tbl-equipos-body');
  tbody.innerHTML = '';

  data.forEach((item, idx) => {
    const tr = document.createElement('tr');
    const anual = item.mensual * 12;

    tr.innerHTML = `
      <td style="text-align: center; font-weight: 600;">${idx + 1}</td>
      <td contenteditable="true" class="cell-edit" data-col="marca">${item.marca}</td>
      <td contenteditable="true" class="cell-edit" data-col="modelo">${item.modelo}</td>
      <td contenteditable="true" class="cell-edit" data-col="serie">${item.serie}</td>
      <td contenteditable="true" class="cell-edit" data-col="cat">${item.cat}</td>
      <td contenteditable="true" class="cell-edit" data-col="desc">${item.desc}</td>
      <td contenteditable="true" class="cell-edit" data-col="energia" style="text-align: center;">${item.energia}</td>
      <td contenteditable="true" class="cell-edit" data-col="cargador" style="text-align: center;">${item.cargador}</td>
      <td contenteditable="true" class="cell-edit num-cell cell-mensual" data-col="mensual">${formatCurrency(item.mensual)}</td>
      <td class="num-cell cell-anual" style="font-weight: 600;">${formatCurrency(anual)}</td>
      <td class="no-print" style="text-align: center;">
        <button class="btn btn-danger-sm btn-delete-row" title="Eliminar equipo">🗑️</button>
      </td>
    `;

    tbody.appendChild(tr);
  });

  recalculateTotals();
  bindCellListeners();
}

// Recalculate Totals & Update Badges / Clauses
function recalculateTotals() {
  const rows = document.querySelectorAll('#tbl-equipos-body tr');
  let subtotalMensual = 0;
  let electricCount = 0;
  let gasCount = 0;

  rows.forEach((tr) => {
    const mensualCell = tr.querySelector('.cell-mensual');
    const anualCell = tr.querySelector('.cell-anual');
    const energiaCell = tr.querySelector('[data-col="energia"]');

    const mensualVal = parseCurrency(mensualCell.innerText);
    const anualVal = mensualVal * 12;

    anualCell.innerText = formatCurrency(anualVal);
    subtotalMensual += mensualVal;

    if (energiaCell && energiaCell.innerText.toLowerCase().includes('gas')) {
      gasCount++;
    } else {
      electricCount++;
    }
  });

  const countTotal = rows.length;
  const ivaVal = subtotalMensual * 0.16;
  const totalVal = subtotalMensual + ivaVal;

  // Update Footer Totals
  document.getElementById('tbl-sum-mensual').innerText = formatCurrency(subtotalMensual);
  document.getElementById('tbl-sum-anual').innerText = formatCurrency(subtotalMensual * 12);

  // Update Top Badges
  document.getElementById('badge-total-equipos').innerText = countTotal;
  document.getElementById('badge-subtotal').innerText = formatCurrency(subtotalMensual) + ' USD';
  document.getElementById('badge-total').innerText = formatCurrency(totalVal) + ' USD';

  // Update Clause Document Texts
  const txtTotalEq = document.getElementById('txt-total-equipos-clausula');
  if (txtTotalEq) txtTotalEq.innerText = countTotal;

  const txtSub = document.getElementById('txt-subtotal-clausula');
  if (txtSub) txtSub.innerText = formatCurrency(subtotalMensual) + ' USD';

  const txtIva = document.getElementById('txt-iva-clausula');
  if (txtIva) txtIva.innerText = formatCurrency(ivaVal) + ' USD';

  const txtTot = document.getElementById('txt-total-clausula');
  if (txtTot) txtTot.innerText = formatCurrency(totalVal) + ' USD';

  // Update Financial Summary Anexo Dos
  const sumSub = document.getElementById('summary-subtotal');
  if (sumSub) sumSub.innerText = formatCurrency(subtotalMensual) + ' USD';

  const sumIva = document.getElementById('summary-iva');
  if (sumIva) sumIva.innerText = formatCurrency(ivaVal) + ' USD';

  const sumTot = document.getElementById('summary-total');
  if (sumTot) sumTot.innerHTML = '<strong>' + formatCurrency(totalVal) + ' USD</strong>';
}

// Bind Cell Edit Listeners
function bindCellListeners() {
  const editableCells = document.querySelectorAll('#tbl-equipos-body [contenteditable="true"]');

  editableCells.forEach((cell) => {
    cell.addEventListener('input', () => {
      recalculateTotals();
    });

    cell.addEventListener('blur', () => {
      if (cell.classList.contains('cell-mensual')) {
        const val = parseCurrency(cell.innerText);
        cell.innerText = formatCurrency(val);
      }
      recalculateTotals();
    });
  });

  // Delete Row Buttons
  const deleteBtns = document.querySelectorAll('.btn-delete-row');
  deleteBtns.forEach((btn) => {
    btn.onclick = (e) => {
      e.target.closest('tr').remove();
      resequenceRowNumbers();
      recalculateTotals();
    };
  });
}

// Resequence Row Numbers 1..N
function resequenceRowNumbers() {
  const rows = document.querySelectorAll('#tbl-equipos-body tr');
  rows.forEach((tr, i) => {
    tr.cells[0].innerText = i + 1;
  });
}

// Add New Equipment Row
function addNewEquipmentRow() {
  const tbody = document.getElementById('tbl-equipos-body');
  const newIndex = tbody.children.length + 1;

  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td style="text-align: center; font-weight: 600;">${newIndex}</td>
    <td contenteditable="true" class="cell-edit" data-col="marca">Heli</td>
    <td contenteditable="true" class="cell-edit" data-col="modelo">Nuevo Modelo</td>
    <td contenteditable="true" class="cell-edit" data-col="serie">Por Asignar</td>
    <td contenteditable="true" class="cell-edit" data-col="cat">Forklift</td>
    <td contenteditable="true" class="cell-edit" data-col="desc">Hombre sentado</td>
    <td contenteditable="true" class="cell-edit" data-col="energia" style="text-align: center;">Electric</td>
    <td contenteditable="true" class="cell-edit" data-col="cargador" style="text-align: center;">480V</td>
    <td contenteditable="true" class="cell-edit num-cell cell-mensual" data-col="mensual">$1,000.00</td>
    <td class="num-cell cell-anual" style="font-weight: 600;">$12,000.00</td>
    <td class="no-print" style="text-align: center;">
      <button class="btn btn-danger-sm btn-delete-row" title="Eliminar equipo">🗑️</button>
    </td>
  `;

  tbody.appendChild(tr);
  recalculateTotals();
  bindCellListeners();
  tr.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Toggle Edit Mode Highlighting
function toggleEditMode() {
  isEditMode = !isEditMode;
  const body = document.body;
  const btnText = document.getElementById('edit-text');
  const btnIcon = document.getElementById('edit-icon');

  if (isEditMode) {
    body.classList.add('editing-active');
    btnText.innerText = 'Modo Edición Activo';
    btnIcon.innerText = '✏️';
  } else {
    body.classList.remove('editing-active');
    btnText.innerText = 'Modo Vista Previa';
    btnIcon.innerText = '👁️';
  }
}

// User Credentials Registry
const validCredentials = [
  { username: "admin", password: "admin" },
  { username: "milwaukee", password: "contrato2026" },
  { username: "ernesto", password: "ernesto123" }
];

// Check Authentication Status
function checkAuthStatus() {
  const isAuth = sessionStorage.getItem('contract_auth') === 'true';
  if (isAuth) {
    document.body.classList.add('logged-in');
    document.body.classList.remove('not-logged-in');
  } else {
    document.body.classList.add('not-logged-in');
    document.body.classList.remove('logged-in');
    // Focus username input
    setTimeout(() => {
      const usernameInput = document.getElementById('login-username');
      if (usernameInput) usernameInput.focus();
    }, 100);
  }
}

// Handle Login Event
function handleLogin(e) {
  if (e) e.preventDefault();
  const usernameInput = document.getElementById('login-username');
  const passwordInput = document.getElementById('login-password');
  const errorBox = document.getElementById('login-error');

  const username = usernameInput.value.trim().toLowerCase();
  const password = passwordInput.value.trim();

  const isValid = validCredentials.some(
    cred => cred.username.toLowerCase() === username && cred.password === password
  );

  if (isValid) {
    sessionStorage.setItem('contract_auth', 'true');
    errorBox.style.display = 'none';
    checkAuthStatus();
  } else {
    errorBox.style.display = 'flex';
    passwordInput.value = '';
    passwordInput.focus();
    
    // Re-trigger animation
    errorBox.style.animation = 'none';
    errorBox.offsetHeight; // trigger reflow
    errorBox.style.animation = 'shakeError 0.4s ease';
  }
}

// Handle Logout Event
function handleLogout() {
  if (confirm('¿Desea cerrar la sesión actual?')) {
    sessionStorage.removeItem('contract_auth');
    document.getElementById('login-username').value = '';
    document.getElementById('login-password').value = '';
    document.getElementById('login-error').style.display = 'none';
    checkAuthStatus();
  }
}

// Initialize Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  // Setup Authentication State
  checkAuthStatus();

  document.body.classList.add('editing-active');
  renderEquipmentTable(originalEquipmentData);

  // Auth Form Listeners
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', handleLogin);
  }

  const btnLogout = document.getElementById('btn-logout');
  if (btnLogout) {
    btnLogout.addEventListener('click', handleLogout);
  }

  // Toggle Password Visibility
  const btnTogglePwd = document.getElementById('btn-toggle-pwd');
  if (btnTogglePwd) {
    btnTogglePwd.addEventListener('click', () => {
      const pwdInput = document.getElementById('login-password');
      if (pwdInput.type === 'password') {
        pwdInput.type = 'text';
        btnTogglePwd.innerText = '🙈';
      } else {
        pwdInput.type = 'password';
        btnTogglePwd.innerText = '👁️';
      }
    });
  }

  // Toolbar Actions
  document.getElementById('btn-add-equipment').addEventListener('click', addNewEquipmentRow);
  document.getElementById('btn-toggle-edit').addEventListener('click', toggleEditMode);

  document.getElementById('btn-reset').addEventListener('click', () => {
    if (confirm('¿Desea restablecer los datos originales de los 83 equipos?')) {
      renderEquipmentTable(originalEquipmentData);
    }
  });

  // Export PDF / Print
  document.getElementById('btn-print-pdf').addEventListener('click', () => {
    window.print();
  });
});

