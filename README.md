# Editable Contrato Renta - Milwaukee & Ernesto Mendoza

Este repositorio contiene la versión consolidada, editable y blindada del **Contrato de Arrendamiento Puro y Servicios Especializados de Renta y Mantenimiento Integral de Montacargas y Equipos de Manejo de Materiales** entre **Techtronic Industries Co. México S. de R.L. de C.V. / Milwaukee** (Cliente) y **Ernesto Alberto Mendoza López** (Proveedor).

---

## 🚀 Contenido del Repositorio

1. **`index.html`** - Aplicación web interactiva para editar el contrato, modificar montos, editar campos de cliente/proveedor, agregar/eliminar equipos y exportar directamente a PDF.
2. **`styles.css`** - Hoja de estilos CSS con diseño ejecutivo y soporte para impresión/exportación a PDF (`@media print`).
3. **`script.js`** - Lógica en JavaScript para el re-cálculo automático instantáneo de tarifas mensuales, anuales, IVA 16% y totales.
4. **`Contrato_Consolidado_Arrendamiento_Milwaukee_Ernesto.docx`** - Documento formal redactado en formato Microsoft Word.
5. **`contrato_arrendamiento_consolidado_milwaukee_ernesto.md`** - Documento del contrato en formato Markdown.

---

## 🛡️ Principales Blindajes Incorporados para el Proveedor

* **Cobro Continuo de Renta por Mal Uso**: En caso de fallas por mala operación, choque o negligencia del cliente, la renta mensual se sigue cobrando al 100% durante las reparaciones.
* **Exclusión de Descuentos en Equipos Usados**: No aplican notas de crédito por paros o reparaciones en equipos usados.
* **Cuidado de Baterías de Litio**: Obligación estricta de mantener carga por encima del 25%.
* **Seguro Obligatorio de R.C. a cargo del Cliente**: Exención total e indemnidad a favor del proveedor.
* **Intereses Moratorios y Suspensión de Servicio**: 2.5% mensual por mora y facultad de retirar equipos tras 15 días de atraso.
* **Pena Convencional por Devolución Tardía**: 2 mensualidades por cada mes de retraso en la entrega física tras vencimiento.
* **Cero referencias a Truck Commerce**: Se eliminaron completamente todos los datos, apoderados y cuentas bancarias asociadas a Truck Commerce.

---

## 💻 Uso de la Aplicación Web

Puedes abrir el archivo `index.html` directamente en cualquier navegador o servirlo localmente mediante:

```bash
python3 -m http.server 8080
```

Y luego ingresar a `http://localhost:8080` para editar el contrato y exportarlo a PDF con el botón **Descargar en PDF**.
