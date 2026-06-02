// Design and Mock Data configuration for CerraCar MVP
const MOCK_IMAGES = {
    // Checkin images
    frente: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=400",
    traseira: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=400",
    esquerda: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=400",
    direita: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=400",
    // Mechanic Task images
    task_old: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=400", // Worn part
    task_new: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=400", // Part in box
    task_done: "https://images.unsplash.com/photo-1617469767053-d3b508a04242?auto=format&fit=crop&q=80&w=400", // Assembled service
    // Success State final vehicle image
    car_clean: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=500"
};

const USER_ROLES = {
    "screen-dashboard": { name: "Gerente", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100" },
    "screen-checkin": { name: "Recepção", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100" },
    "screen-budget": { name: "Consultor", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=100" },
    "screen-box": { name: "Mecânico (Box 3)", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" },
    "screen-dossier": { name: "Dossiê Cliente", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" }
};

// Initial Mock Dataset
const DEFAULT_VEHICLES = [
    {
        id: "v-100",
        placa: "ABC-1234",
        modelo: "Honda Civic Touring 2021",
        km: "50000",
        cliente: "Rodrigo Alencar",
        status: "recepcao",
        checkin: {
            data: "02/06/2026",
            fotos: { frente: null, traseira: null, esquerda: null, direita: null },
            termoGerado: false,
            assinatura: null
        },
        orcamento: {
            opcaoSelecionada: null,
            valores: {
                A: { descricao: "Peças Originais Honda + Fluido Premium", total: 1850.00 },
                B: { descricao: "Peças Paralelas de Alta Qualidade", total: 1200.00 },
                C: { descricao: "Apenas o Essencial (Pastilhas)", total: 450.00 }
            }
        },
        servico: {
            tarefas: [
                { id: "t1", descricao: "Trocar pastilhas de freio dianteiras", fotos: { velha: null, nova: null, concluido: null }, concluida: false },
                { id: "t2", descricao: "Substituir óleo e filtro do motor", fotos: { velha: null, nova: null, concluido: null }, concluida: false }
            ]
        }
    },
    {
        id: "v-101",
        placa: "KGA-7422",
        modelo: "Jeep Compass Longitude 2020",
        km: "78000",
        cliente: "Mariana Souza",
        status: "orcamento",
        checkin: {
            data: "01/06/2026",
            fotos: { 
                frente: MOCK_IMAGES.frente, 
                traseira: MOCK_IMAGES.traseira, 
                esquerda: MOCK_IMAGES.esquerda, 
                direita: MOCK_IMAGES.direita 
            },
            termoGerado: true,
            assinatura: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='50'><path d='M10 25 Q 30 10, 50 25 T 90 25' stroke='black' stroke-width='2' fill='none'/></svg>"
        },
        orcamento: {
            opcaoSelecionada: null,
            valores: {
                A: { descricao: "Pastilhas Brembo + Discos Freio Originais", total: 2450.00 },
                B: { descricao: "Pastilhas Cobreq + Retífica de Discos", total: 1400.00 },
                C: { descricao: "Apenas Troca de Pastilhas Traseiras", total: 680.00 }
            }
        },
        servico: {
            tarefas: [
                { id: "t1", descricao: "Substituição de Discos e Pastilhas Dianteiras", fotos: { velha: null, nova: null, concluido: null }, concluida: false },
                { id: "t2", descricao: "Alinhamento 3D e Balanceamento", fotos: { velha: null, nova: null, concluido: null }, concluida: false }
            ]
        }
    },
    {
        id: "v-102",
        placa: "NXP-9852",
        modelo: "Toyota Corolla Altis 2022",
        km: "35200",
        cliente: "José da Silva",
        status: "execucao",
        checkin: {
            data: "02/06/2026",
            fotos: { 
                frente: MOCK_IMAGES.frente, 
                traseira: MOCK_IMAGES.traseira, 
                esquerda: MOCK_IMAGES.esquerda, 
                direita: MOCK_IMAGES.direita 
            },
            termoGerado: true,
            assinatura: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='50'><path d='M10 30 Q 40 10, 80 40' stroke='black' stroke-width='2' fill='none'/></svg>"
        },
        orcamento: {
            opcaoSelecionada: "A",
            valores: {
                A: { descricao: "Pastilhas Toyota Genuine + Filtro Ar Condicionado", total: 950.00 },
                B: { descricao: "Pastilhas Fras-le + Higienização do Ar", total: 650.00 },
                C: { descricao: "Substituição apenas das Pastilhas Dianteiras", total: 400.00 }
            }
        },
        servico: {
            tarefas: [
                { 
                    id: "t1", 
                    descricao: "Substituição de Pastilhas de Freio", 
                    fotos: { velha: MOCK_IMAGES.task_old, nova: MOCK_IMAGES.task_new, concluido: null }, 
                    concluida: false 
                },
                { 
                    id: "t2", 
                    descricao: "Filtro de Cabine e Higienização do Ar", 
                    fotos: { velha: null, nova: null, concluido: null }, 
                    concluida: false 
                }
            ]
        }
    },
    {
        id: "v-103",
        placa: "QUR-4921",
        modelo: "Chevrolet Onix Turbo 2022",
        km: "42000",
        cliente: "Viviane Ramos",
        status: "pronto",
        checkin: {
            data: "31/05/2026",
            fotos: { 
                frente: MOCK_IMAGES.frente, 
                traseira: MOCK_IMAGES.traseira, 
                esquerda: MOCK_IMAGES.esquerda, 
                direita: MOCK_IMAGES.direita 
            },
            termoGerado: true,
            assinatura: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='50'><path d='M10 20 L 40 40 L 90 10' stroke='black' stroke-width='2' fill='none'/></svg>"
        },
        orcamento: {
            opcaoSelecionada: "B",
            valores: {
                A: { descricao: "Revisão Geral 40k + Velas Originais", total: 1550.00 },
                B: { descricao: "Revisão Preventiva (Filtros e Fluido Freio)", total: 980.00 },
                C: { descricao: "Troca Filtro de Combustível e Óleo", total: 480.00 }
            }
        },
        servico: {
            tarefas: [
                { 
                    id: "t1", 
                    descricao: "Substituição de Filtros & Óleo 5W30 Dexos", 
                    fotos: { velha: MOCK_IMAGES.task_old, nova: MOCK_IMAGES.task_new, concluido: MOCK_IMAGES.task_done }, 
                    concluida: true 
                },
                { 
                    id: "t2", 
                    descricao: "Substituição do Fluido de Freio DOT4", 
                    fotos: { velha: MOCK_IMAGES.task_old, nova: MOCK_IMAGES.task_new, concluido: MOCK_IMAGES.task_done }, 
                    concluida: true 
                }
            ]
        }
    }
];

// Commercial Alerts Data
const COMMERCIAL_ALERTS = [
    {
        id: "alert-1",
        placa: "ABC-1234",
        modelo: "Honda Civic Touring",
        texto: "O veículo <strong>Honda Civic (ABC-1234)</strong> atingiu <strong>50.000km</strong>. Hora de oferecer a revisão completa de freios e suspensão.",
        linkText: "Abrir Check-in",
        vehicleId: "v-100"
    },
    {
        id: "alert-2",
        placa: "QUR-4921",
        modelo: "Chevrolet Onix Turbo",
        texto: "O veículo <strong>Chevrolet Onix (QUR-4921)</strong> está pronto! Envie o Dossiê Final auditado para o cliente aprovar o checkout.",
        linkText: "Ver Dossiê",
        vehicleId: "v-103",
        actionScreen: "screen-dossier"
    }
];

// App State Cache
let vehicles = [];

// DOM Elements & Routing
document.addEventListener("DOMContentLoaded", () => {
    initVehicles();
    setupRouting();
    setupCheckinForm();
    setupSignatureModal();
    setupBudgetScreen();
    setupMechanicScreen();
    setupDossierScreen();
    renderDashboard();
});

// Initialization of State
function initVehicles() {
    const cached = localStorage.getItem("cerracar_veiculos");
    if (cached) {
        vehicles = JSON.parse(cached);
    } else {
        vehicles = [...DEFAULT_VEHICLES];
        localStorage.setItem("cerracar_veiculos", JSON.stringify(vehicles));
    }
}

function saveVehiclesState() {
    localStorage.setItem("cerracar_veiculos", JSON.stringify(vehicles));
}

// Global SPA Router
function setupRouting() {
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            const targetScreen = item.getAttribute("data-screen");
            navigateTo(targetScreen);
        });
    });
}

function navigateTo(screenId) {
    // Toggle screens active class
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add("active");
    }

    // Toggle active state in nav buttons
    document.querySelectorAll(".nav-item").forEach(btn => {
        if (btn.getAttribute("data-screen") === screenId) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    // Update Header Profile Context
    const profile = USER_ROLES[screenId] || USER_ROLES["screen-dashboard"];
    document.getElementById("header-user-role").textContent = profile.name;
    document.getElementById("header-user-avatar").src = profile.avatar;

    // Refresh specific screen content
    if (screenId === "screen-dashboard") renderDashboard();
    if (screenId === "screen-budget") renderBudgetSelector();
    if (screenId === "screen-box") renderMechanicSelector();
    if (screenId === "screen-dossier") renderDossierSelector();
    
    // Scroll content to top
    document.getElementById("app-main-content").scrollTop = 0;
}

// -------------------------------------------------------------
// 1. DASHBOARD SCREEN LOGIC
// -------------------------------------------------------------
function renderDashboard() {
    // 1. Update counts
    const countAll = vehicles.length;
    const countRecepcao = vehicles.filter(v => v.status === "recepcao").length;
    const countOrcamento = vehicles.filter(v => v.status === "orcamento").length;
    const countExecucao = vehicles.filter(v => v.status === "execucao").length;
    const countPronto = vehicles.filter(v => v.status === "pronto").length;

    document.getElementById("count-all").textContent = countAll;
    document.getElementById("count-recepcao").textContent = countRecepcao;
    document.getElementById("count-orcamento").textContent = countOrcamento;
    document.getElementById("count-execucao").textContent = countExecucao;
    document.getElementById("count-pronto").textContent = countPronto;

    // 2. Render Commercial Alerts
    const alertsContainer = document.getElementById("alerts-container");
    alertsContainer.innerHTML = "";
    COMMERCIAL_ALERTS.forEach(alert => {
        const card = document.createElement("div");
        card.className = "alert-card";
        card.innerHTML = `
            <div class="alert-icon-container">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
            </div>
            <div class="alert-body">
                <p class="alert-text">${alert.texto}</p>
                <button class="alert-action" data-target="${alert.actionScreen || 'screen-checkin'}" data-vehicle="${alert.vehicleId}">
                    ${alert.linkText} ➔
                </button>
            </div>
        `;
        alertsContainer.appendChild(card);
    });

    // Wire alert actions
    alertsContainer.querySelectorAll(".alert-action").forEach(btn => {
        btn.addEventListener("click", () => {
            const screen = btn.getAttribute("data-target");
            const vId = btn.getAttribute("data-vehicle");
            if (screen === "screen-checkin") {
                const targetVeh = vehicles.find(v => v.id === vId);
                if (targetVeh) {
                    // Pre-populate check-in form for the alert car
                    document.getElementById("input-placa").value = targetVeh.placa;
                    document.getElementById("input-modelo").value = targetVeh.modelo;
                    document.getElementById("input-km").value = targetVeh.km;
                    document.getElementById("input-cliente").value = targetVeh.cliente;
                }
            } else if (screen === "screen-dossier") {
                window.selectedDossierVehicleId = vId; // Save globally to auto-select
            }
            navigateTo(screen);
        });
    });

    // 3. Render Vehicle List
    const vListContainer = document.getElementById("dashboard-vehicles-list");
    vListContainer.innerHTML = "";
    
    // Determine active filter
    const activeFunnelCard = document.querySelector(".funnel-card.active");
    const statusFilter = activeFunnelCard ? activeFunnelCard.getAttribute("data-status") : "all";

    const filteredVehicles = statusFilter === "all" 
        ? vehicles 
        : vehicles.filter(v => v.status === statusFilter);

    if (filteredVehicles.length === 0) {
        vListContainer.innerHTML = `
            <div style="text-align: center; color: var(--text-muted); padding: 20px; font-size: 13px;">
                Nenhum veículo nesta etapa.
            </div>
        `;
        return;
    }

    filteredVehicles.forEach(v => {
        const item = document.createElement("div");
        item.className = "vehicle-list-item";
        
        let labelStatus = "Recepção";
        if (v.status === "orcamento") labelStatus = "Orçamento";
        if (v.status === "execucao") labelStatus = "No Box";
        if (v.status === "pronto") labelStatus = "Pronto";

        item.innerHTML = `
            <div class="vehicle-info">
                <span class="vehicle-plate">${v.placa}</span>
                <span class="vehicle-name">${v.modelo}</span>
                <span class="vehicle-meta">Cliente: ${v.cliente} • ${v.km} KM</span>
            </div>
            <div>
                <span class="vehicle-status-badge badge-${v.status}">${labelStatus}</span>
            </div>
        `;

        item.addEventListener("click", () => {
            // Context navigation: clicking a car takes the user to the screen appropriate to its status
            if (v.status === "recepcao") {
                // Open check-in prefilled
                document.getElementById("input-placa").value = v.placa;
                document.getElementById("input-modelo").value = v.modelo;
                document.getElementById("input-km").value = v.km;
                document.getElementById("input-cliente").value = v.cliente;
                navigateTo("screen-checkin");
            } else if (v.status === "orcamento") {
                window.selectedBudgetVehicleId = v.id;
                navigateTo("screen-budget");
            } else if (v.status === "execucao") {
                window.selectedBoxVehicleId = v.id;
                navigateTo("screen-box");
            } else if (v.status === "pronto") {
                window.selectedDossierVehicleId = v.id;
                navigateTo("screen-dossier");
            }
        });

        vListContainer.appendChild(item);
    });

    // Wire funnel filters
    document.querySelectorAll(".funnel-card").forEach(card => {
        card.replaceWith(card.cloneNode(true)); // Clear listeners
    });
    
    document.querySelectorAll(".funnel-card").forEach(card => {
        card.addEventListener("click", () => {
            document.querySelectorAll(".funnel-card").forEach(c => c.classList.remove("active"));
            card.classList.add("active");
            renderDashboard();
        });
    });
}

// -------------------------------------------------------------
// 2. CHECK-IN SCREEN LOGIC
// -------------------------------------------------------------
let currentCheckinSignature = null;

function setupCheckinForm() {
    const zones = document.querySelectorAll(".photo-upload-zone");
    
    zones.forEach(zone => {
        const fileInput = zone.querySelector("input[type='file']");
        const previewImg = zone.querySelector(".upload-preview");
        const uploadIcon = zone.querySelector(".upload-icon");
        const mockBtn = zone.querySelector(".btn-simulate-photo");

        // Click zone triggers file selection
        zone.addEventListener("click", (e) => {
            // If clicking mock button, ignore standard file input trigger
            if (e.target.classList.contains("btn-simulate-photo")) return;
            fileInput.click();
        });

        // Handle File Select
        fileInput.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    previewImg.src = event.target.result;
                    previewImg.style.display = "block";
                    uploadIcon.style.display = "none";
                    zone.classList.add("has-image");
                };
                reader.readAsDataURL(file);
            }
        });

        // Handle Mock Button Click
        mockBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            const zName = mockBtn.getAttribute("data-zone");
            previewImg.src = MOCK_IMAGES[zName] || MOCK_IMAGES.frente;
            previewImg.style.display = "block";
            uploadIcon.style.display = "none";
            zone.classList.add("has-image");
            showToast(`Foto da ${zName} simulada com sucesso!`);
        });
    });

    // Checkin submit button -> Triggers Signature Modal
    const btnGenerate = document.getElementById("btn-generate-checkin");
    btnGenerate.addEventListener("click", () => {
        // Validate basic inputs
        const placa = document.getElementById("input-placa").value.trim().toUpperCase();
        const modelo = document.getElementById("input-modelo").value.trim();
        const km = document.getElementById("input-km").value.trim();
        const cliente = document.getElementById("input-cliente").value.trim();

        if (!placa || !modelo || !km || !cliente) {
            showToast("Por favor, preencha todos os campos cadastrais.");
            return;
        }

        // Open Signature Modal
        openSignatureModal();
    });
}

function openSignatureModal() {
    const modal = document.getElementById("signature-modal");
    modal.classList.add("active");
    
    // Setup signature canvas resize and listeners
    const canvas = document.getElementById("signature-canvas");
    const ctx = canvas.getContext("2d");
    
    // Correct canvas coordinate scaling
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
    
    ctx.strokeStyle = "#0f172a";
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    
    let drawing = false;
    let lastX = 0;
    let lastY = 0;

    function getMousePos(canvasDom, touchOrMouseEvent) {
        const rect = canvasDom.getBoundingClientRect();
        const clientX = touchOrMouseEvent.touches ? touchOrMouseEvent.touches[0].clientX : touchOrMouseEvent.clientX;
        const clientY = touchOrMouseEvent.touches ? touchOrMouseEvent.touches[0].clientY : touchOrMouseEvent.clientY;
        return {
            x: clientX - rect.left,
            y: clientY - rect.top
        };
    }

    function startDraw(e) {
        drawing = true;
        const pos = getMousePos(canvas, e);
        lastX = pos.x;
        lastY = pos.y;
    }

    function draw(e) {
        if (!drawing) return;
        e.preventDefault();
        const pos = getMousePos(canvas, e);
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
        lastX = pos.x;
        lastY = pos.y;
    }

    function stopDraw() {
        drawing = false;
    }

    // Mouse listeners
    canvas.onmousedown = startDraw;
    canvas.onmousemove = draw;
    window.onmouseup = stopDraw;

    // Touch listeners (Mobile-first support!)
    canvas.ontouchstart = startDraw;
    canvas.ontouchmove = draw;
    canvas.ontouchend = stopDraw;

    // Reset Canvas
    const btnClear = document.getElementById("btn-clear-signature");
    btnClear.onclick = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
}

function setupSignatureModal() {
    const modal = document.getElementById("signature-modal");
    const btnClose = document.getElementById("btn-close-signature");
    const btnSave = document.getElementById("btn-save-signature");

    btnClose.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    btnSave.addEventListener("click", () => {
        const canvas = document.getElementById("signature-canvas");
        const ctx = canvas.getContext("2d");
        
        // Simple pixel check to see if signed
        const empty = isCanvasBlank(canvas);
        if (empty) {
            showToast("A assinatura do cliente é obrigatória.");
            return;
        }

        const dataUrl = canvas.toDataURL();
        modal.classList.remove("active");
        
        // Process new Checkin
        submitCheckin(dataUrl);
    });
}

function isCanvasBlank(canvas) {
    const blank = document.createElement('canvas');
    blank.width = canvas.width;
    blank.height = canvas.height;
    return canvas.toDataURL() === blank.toDataURL();
}

function submitCheckin(signatureDataUrl) {
    const placa = document.getElementById("input-placa").value.trim().toUpperCase();
    const modelo = document.getElementById("input-modelo").value.trim();
    const km = document.getElementById("input-km").value.trim();
    const cliente = document.getElementById("input-cliente").value.trim();

    // Get previews or default mock check-in photos
    const checkinPhotos = {};
    const directions = ['frente', 'traseira', 'esquerda', 'direita'];
    directions.forEach(dir => {
        const zone = document.getElementById(`zone-${dir}`);
        const img = zone.querySelector(".upload-preview");
        if (zone.classList.contains("has-image") && img.src) {
            checkinPhotos[dir] = img.src;
        } else {
            // Fallback mock image if user left empty for demo
            checkinPhotos[dir] = MOCK_IMAGES[dir];
        }
    });

    // Check if vehicle already exists in list (e.g. pre-checkin alert car), or add new
    let targetVeh = vehicles.find(v => v.placa === placa);
    
    if (targetVeh) {
        // Update existing alert car
        targetVeh.status = "orcamento";
        targetVeh.km = km;
        targetVeh.cliente = cliente;
        targetVeh.checkin = {
            data: new Date().toLocaleDateString('pt-BR'),
            fotos: checkinPhotos,
            termoGerado: true,
            assinatura: signatureDataUrl
        };
    } else {
        // Create new car structure
        const newVehId = "v-" + Date.now();
        targetVeh = {
            id: newVehId,
            placa: placa,
            modelo: modelo,
            km: km,
            cliente: cliente,
            status: "orcamento",
            checkin: {
                data: new Date().toLocaleDateString('pt-BR'),
                fotos: checkinPhotos,
                termoGerado: true,
                assinatura: signatureDataUrl
            },
            orcamento: {
                opcaoSelecionada: null,
                valores: {
                    A: { descricao: "Peças Originais Premium de Fábrica", total: 1850.00 },
                    B: { descricao: "Peças Paralelas Homologadas", total: 1200.00 },
                    C: { descricao: "Apenas Reparo Crítico de Emergência", total: 450.00 }
                }
            },
            servico: {
                tarefas: [
                    { id: "t1", descricao: "Manutenção Corretiva das Pastilhas de Freio", fotos: { velha: null, nova: null, concluido: null }, concluida: false },
                    { id: "t2", descricao: "Substituição e Purga do Fluido de Freio", fotos: { velha: null, nova: null, concluido: null }, concluida: false }
                ]
            }
        };
        vehicles.push(targetVeh);
    }

    saveVehiclesState();
    
    // Clear forms and previews for next checkin
    document.getElementById("checkin-form").reset();
    document.querySelectorAll(".photo-upload-zone").forEach(zone => {
        zone.classList.remove("has-image");
        zone.querySelector(".upload-preview").style.display = "none";
        zone.querySelector(".upload-icon").style.display = "block";
    });

    // Trigger Success Overlay
    showSuccessOverlay(
        "Termo de Entrada Registrado!", 
        `O veículo ${modelo} agora está aguardando a aprovação do orçamento.`,
        () => {
            window.selectedBudgetVehicleId = targetVeh.id;
            navigateTo("screen-budget");
        }
    );
}

// -------------------------------------------------------------
// 3. FLEXIBLE BUDGET SCREEN LOGIC
// -------------------------------------------------------------
function setupBudgetScreen() {
    const dropdown = document.getElementById("budget-vehicle-select");
    
    dropdown.addEventListener("change", () => {
        renderBudgetCards(dropdown.value);
    });

    // Budget approval triggers
    document.querySelectorAll(".btn-approve-budget").forEach(btn => {
        btn.addEventListener("click", () => {
            const opt = btn.getAttribute("data-option");
            const vId = dropdown.value;
            approveBudgetOption(vId, opt);
        });
    });
}

function renderBudgetSelector() {
    const dropdown = document.getElementById("budget-vehicle-select");
    dropdown.innerHTML = "";

    const waitingCars = vehicles.filter(v => v.status === "orcamento");

    if (waitingCars.length === 0) {
        document.getElementById("budget-empty-state").style.display = "block";
        document.getElementById("budget-content-wrapper").style.display = "none";
        return;
    }

    document.getElementById("budget-empty-state").style.display = "none";
    document.getElementById("budget-content-wrapper").style.display = "block";

    waitingCars.forEach(v => {
        const opt = document.createElement("option");
        opt.value = v.id;
        opt.textContent = `${v.modelo} [${v.placa}]`;
        dropdown.appendChild(opt);
    });

    // Auto-select helper from Dashboard context
    if (window.selectedBudgetVehicleId) {
        const found = waitingCars.some(v => v.id === window.selectedBudgetVehicleId);
        if (found) {
            dropdown.value = window.selectedBudgetVehicleId;
        }
        window.selectedBudgetVehicleId = null; // consume
    }

    renderBudgetCards(dropdown.value);
}

function renderBudgetCards(vehicleId) {
    const v = vehicles.find(v => v.id === vehicleId);
    if (!v) return;

    // Dynamically insert details and totals based on mock metadata values
    const optACard = document.getElementById("option-a-card");
    const optBCard = document.getElementById("option-b-card");
    const optCCard = document.getElementById("option-c-card");

    const valA = v.orcamento.valores.A;
    const valB = v.orcamento.valores.B;
    const valC = v.orcamento.valores.C;

    optACard.querySelector(".budget-price").innerHTML = `<span style="font-size: 11px;">R$</span> ${valA.total.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
    optACard.querySelector(".budget-title").textContent = valA.descricao;

    optBCard.querySelector(".budget-price").innerHTML = `<span style="font-size: 11px;">R$</span> ${valB.total.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
    optBCard.querySelector(".budget-title").textContent = valB.descricao;

    optCCard.querySelector(".budget-price").innerHTML = `<span style="font-size: 11px;">R$</span> ${valC.total.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
    optCCard.querySelector(".budget-title").textContent = valC.descricao;
}

function approveBudgetOption(vehicleId, optionCode) {
    const v = vehicles.find(v => v.id === vehicleId);
    if (!v) return;

    // Mutate state
    v.status = "execucao";
    v.orcamento.opcaoSelecionada = optionCode;
    saveVehiclesState();

    showSuccessOverlay(
        "Orçamento Aprovado!",
        `Carro encaminhado para execução imediata no Box com a Opção ${optionCode}.`,
        () => {
            window.selectedBoxVehicleId = v.id;
            navigateTo("screen-box");
        }
    );
}

// -------------------------------------------------------------
// 4. BOX DE SERVIÇO (MECÂNICO) LOGIC
// -------------------------------------------------------------
function setupMechanicScreen() {
    const dropdown = document.getElementById("box-vehicle-select");
    
    dropdown.addEventListener("change", () => {
        renderMechanicTasks(dropdown.value);
    });

    // Finish OS Button Click
    const btnFinish = document.getElementById("btn-finish-os");
    btnFinish.addEventListener("click", () => {
        const vId = dropdown.value;
        finishService(vId);
    });
}

function renderMechanicSelector() {
    const dropdown = document.getElementById("box-vehicle-select");
    dropdown.innerHTML = "";

    const activeCars = vehicles.filter(v => v.status === "execucao");

    if (activeCars.length === 0) {
        document.getElementById("box-empty-state").style.display = "block";
        document.getElementById("box-content-wrapper").style.display = "none";
        return;
    }

    document.getElementById("box-empty-state").style.display = "none";
    document.getElementById("box-content-wrapper").style.display = "block";

    activeCars.forEach(v => {
        const opt = document.createElement("option");
        opt.value = v.id;
        opt.textContent = `${v.modelo} [${v.placa}]`;
        dropdown.appendChild(opt);
    });

    if (window.selectedBoxVehicleId) {
        const found = activeCars.some(v => v.id === window.selectedBoxVehicleId);
        if (found) {
            dropdown.value = window.selectedBoxVehicleId;
        }
        window.selectedBoxVehicleId = null; // consume
    }

    renderMechanicTasks(dropdown.value);
}

function renderMechanicTasks(vehicleId) {
    const v = vehicles.find(v => v.id === vehicleId);
    if (!v) return;

    const tasksContainer = document.getElementById("mechanic-tasks-container");
    tasksContainer.innerHTML = "";

    v.servico.tarefas.forEach((task, idx) => {
        const card = document.createElement("div");
        card.className = `mechanic-task-card ${task.concluida ? 'completed' : ''}`;
        card.id = `task-card-${task.id}`;
        
        card.innerHTML = `
            <div class="task-header">
                <div class="task-check-circle">✓</div>
                <div class="task-title">${task.descricao}</div>
            </div>
            
            <div class="task-uploads-title">Auditoria Exigida (Foto Antes / Durante / Depois):</div>
            
            <div class="task-uploads-grid">
                <!-- Foto Peça Velha -->
                <div class="task-upload-slot ${task.fotos.velha ? 'has-image' : ''}" data-task-id="${task.id}" data-photo-type="velha">
                    <span class="btn-simulate-photo" data-task-id="${task.id}" data-photo-type="velha">MOCK</span>
                    <input type="file" accept="image/*" style="display:none;" id="file-${task.id}-velha">
                    ${task.fotos.velha ? `<img src="${task.fotos.velha}" class="task-upload-preview">` : `
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                        <span>1. Peça Velha</span>
                    `}
                </div>

                <!-- Foto Peça Nova -->
                <div class="task-upload-slot ${task.fotos.nova ? 'has-image' : ''}" data-task-id="${task.id}" data-photo-type="nova">
                    <span class="btn-simulate-photo" data-task-id="${task.id}" data-photo-type="nova">MOCK</span>
                    <input type="file" accept="image/*" style="display:none;" id="file-${task.id}-nova">
                    ${task.fotos.nova ? `<img src="${task.fotos.nova}" class="task-upload-preview">` : `
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                        <span>2. Peça Nova</span>
                    `}
                </div>

                <!-- Foto Finalizado -->
                <div class="task-upload-slot ${task.fotos.concluido ? 'has-image' : ''}" data-task-id="${task.id}" data-photo-type="concluido">
                    <span class="btn-simulate-photo" data-task-id="${task.id}" data-photo-type="concluido">MOCK</span>
                    <input type="file" accept="image/*" style="display:none;" id="file-${task.id}-concluido">
                    ${task.fotos.concluido ? `<img src="${task.fotos.concluido}" class="task-upload-preview">` : `
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                        <span>3. Pronto</span>
                    `}
                </div>
            </div>
        `;

        tasksContainer.appendChild(card);
    });

    // Hook listeners for mechanic uploads
    setupMechanicUploadListeners(v);
    updateOSProgress(v);
}

function setupMechanicUploadListeners(vehicle) {
    const slots = document.querySelectorAll(".task-upload-slot");

    slots.forEach(slot => {
        const fileInput = slot.querySelector("input[type='file']");
        const taskId = slot.getAttribute("data-task-id");
        const type = slot.getAttribute("data-photo-type");
        const mockBtn = slot.querySelector(".btn-simulate-photo");

        slot.addEventListener("click", (e) => {
            if (e.target.classList.contains("btn-simulate-photo")) return;
            fileInput.click();
        });

        fileInput.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    saveTaskPhoto(vehicle.id, taskId, type, event.target.result);
                };
                reader.readAsDataURL(file);
            }
        });

        mockBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            let mockUrl = MOCK_IMAGES.task_old;
            if (type === "nova") mockUrl = MOCK_IMAGES.task_new;
            if (type === "concluido") mockUrl = MOCK_IMAGES.task_done;

            saveTaskPhoto(vehicle.id, taskId, type, mockUrl);
            showToast(`Foto do box para ${type} simulada!`);
        });
    });
}

function saveTaskPhoto(vehicleId, taskId, photoType, imageDataUrl) {
    const v = vehicles.find(v => v.id === vehicleId);
    if (!v) return;

    const task = v.servico.tarefas.find(t => t.id === taskId);
    if (!task) return;

    task.fotos[photoType] = imageDataUrl;

    // Check if task is now completed (all 3 photos verified)
    if (task.fotos.velha && task.fotos.nova && task.fotos.concluido) {
        task.concluida = true;
    } else {
        task.concluida = false;
    }

    saveVehiclesState();
    
    // Refresh GUI
    renderMechanicTasks(vehicleId);
}

function updateOSProgress(vehicle) {
    const totalTasks = vehicle.servico.tarefas.length;
    if (totalTasks === 0) return;

    // Total required uploads: 3 photos per task
    let totalSlots = totalTasks * 3;
    let completedSlots = 0;

    vehicle.servico.tarefas.forEach(t => {
        if (t.fotos.velha) completedSlots++;
        if (t.fotos.nova) completedSlots++;
        if (t.fotos.concluido) completedSlots++;
    });

    const progressPercentage = Math.round((completedSlots / totalSlots) * 100);
    
    document.getElementById("os-progress-percentage").textContent = `${progressPercentage}%`;
    document.getElementById("os-progress-bar-fill").style.width = `${progressPercentage}%`;

    // Enable O.S. wrap-up button only if progress is 100%
    const btnFinish = document.getElementById("btn-finish-os");
    if (progressPercentage === 100) {
        btnFinish.removeAttribute("disabled");
    } else {
        btnFinish.setAttribute("disabled", "true");
    }
}

function finishService(vehicleId) {
    const v = vehicles.find(v => v.id === vehicleId);
    if (!v) return;

    // Update state to pronto
    v.status = "pronto";
    saveVehiclesState();

    showSuccessOverlay(
        "Serviço Concluído!",
        "Dossiê final compilado com sucesso. Carro liberado para checkout.",
        () => {
            window.selectedDossierVehicleId = v.id;
            navigateTo("screen-dossier");
        }
    );
}

// -------------------------------------------------------------
// 5. CLIENT DOSSIER SCREEN LOGIC
// -------------------------------------------------------------
function setupDossierScreen() {
    const dropdown = document.getElementById("dossier-vehicle-select");
    
    dropdown.addEventListener("change", () => {
        renderDossierTimeline(dropdown.value);
    });

    // Share button
    document.getElementById("btn-share-dossier").addEventListener("click", () => {
        const v = vehicles.find(v => v.id === dropdown.value);
        if (!v) return;
        
        // Simulates copy link / WhatsApp action
        const mockLink = `https://cerracar.com.br/dossie/${v.id}`;
        navigator.clipboard.writeText(mockLink).then(() => {
            showToast("Link do Dossiê copiado! Compartilhe via WhatsApp.");
        }).catch(() => {
            showToast("Compartilhando Dossiê no WhatsApp...");
        });
    });
}

function renderDossierSelector() {
    const dropdown = document.getElementById("dossier-vehicle-select");
    dropdown.innerHTML = "";

    // Show all vehicles in dossier selector so we can view histories
    vehicles.forEach(v => {
        const opt = document.createElement("option");
        opt.value = v.id;
        opt.textContent = `${v.modelo} [${v.placa}]`;
        dropdown.appendChild(opt);
    });

    // Auto select helper
    if (window.selectedDossierVehicleId) {
        dropdown.value = window.selectedDossierVehicleId;
        window.selectedDossierVehicleId = null;
    }

    renderDossierTimeline(dropdown.value);
}

function renderDossierTimeline(vehicleId) {
    const v = vehicles.find(v => v.id === vehicleId);
    if (!v) return;

    // Header info
    document.getElementById("dossier-modelo").textContent = v.modelo;
    document.getElementById("dossier-placa").textContent = v.placa;
    document.getElementById("dossier-cliente-km").textContent = `Cliente: ${v.cliente} • KM Atual: ${v.km.toLocaleString()}`;

    // Generate Timeline Steps
    const container = document.getElementById("dossier-timeline-container");
    container.innerHTML = "";

    // STEP 1: CHECK-IN
    const stepCheckin = document.createElement("div");
    stepCheckin.className = "timeline-item completed";
    
    // Build check-in images HTML
    let photosHtml = "";
    if (v.checkin.fotos) {
        const dirs = Object.keys(v.checkin.fotos);
        dirs.forEach(dir => {
            const src = v.checkin.fotos[dir] || MOCK_IMAGES[dir];
            photosHtml += `
                <div class="timeline-photo-card">
                    <img src="${src}" alt="${dir}">
                    <span class="timeline-photo-label">${dir}</span>
                </div>
            `;
        });
    }

    stepCheckin.innerHTML = `
        <span class="timeline-badge">Fase 1: Entrada</span>
        <h4 class="timeline-title">Vistoria de Check-in Realizada</h4>
        <p class="timeline-desc">Registro visual do estado físico do veículo no pátio e assinatura digital do termo de recepção em <strong>${v.checkin.data || 'Hoje'}</strong>.</p>
        
        <div class="timeline-gallery">
            ${photosHtml}
        </div>
        
        <div style="margin-top: 10px;">
            <span class="form-label" style="font-size: 9px; margin-bottom: 2px;">Assinatura Digital de Entrada:</span>
            ${v.checkin.assinatura ? `<img src="${v.checkin.assinatura}" class="dossier-signature-img">` : `
                <div style="font-size: 11px; color: var(--text-muted); font-style: italic;">Assinatura não coletada.</div>
            `}
        </div>
    `;
    container.appendChild(stepCheckin);

    // STEP 2: BUDGET
    const stepBudget = document.createElement("div");
    // Completed if budget was approved
    const budgetApproved = v.orcamento.opcaoSelecionada !== null;
    stepBudget.className = `timeline-item ${budgetApproved ? 'completed' : ''}`;
    
    let budgetDetails = `<p class="timeline-desc">Aguardando análise e aprovação de pacotes pelo cliente.</p>`;
    if (budgetApproved) {
        const opt = v.orcamento.opcaoSelecionada;
        const detail = v.orcamento.valores[opt];
        budgetDetails = `
            <p class="timeline-desc">
                Opção selecionada: <strong>Opção ${opt} - ${detail.descricao}</strong>.<br>
                Valor Total Autorizado: <strong>R$ ${detail.total.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</strong>.
            </p>
        `;
    }

    stepBudget.innerHTML = `
        <span class="timeline-badge">Fase 2: Aprovação</span>
        <h4 class="timeline-title">Orçamento Flexível Autorizado</h4>
        ${budgetDetails}
    `;
    container.appendChild(stepBudget);

    // STEP 3: MECHANIC AUDIT (BOX EXECUTION)
    const stepService = document.createElement("div");
    // Done if status is pronto
    const serviceDone = v.status === "pronto";
    stepService.className = `timeline-item ${serviceDone ? 'completed' : ''}`;

    let tasksDossierHtml = "";
    v.servico.tarefas.forEach(t => {
        const hasPhotos = t.fotos.velha || t.fotos.nova || t.fotos.concluido;
        
        tasksDossierHtml += `
            <div style="margin-bottom: 14px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-color); border-radius: 8px; padding: 10px;">
                <div style="font-size: 13px; font-weight: 600; color: #fff; margin-bottom: 6px; display:flex; align-items:center; gap:6px;">
                    <span style="color: ${t.concluida ? 'var(--accent-green)' : 'var(--text-muted)'}">${t.concluida ? '●' : '○'}</span>
                    ${t.descricao}
                </div>
                ${hasPhotos ? `
                    <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap: 6px;">
                        <div class="timeline-photo-card" style="padding: 2px;">
                            <img src="${t.fotos.velha || MOCK_IMAGES.task_old}" style="aspect-ratio:1;">
                            <span class="timeline-photo-label" style="font-size: 7px;">1. Velha</span>
                        </div>
                        <div class="timeline-photo-card" style="padding: 2px;">
                            <img src="${t.fotos.nova || MOCK_IMAGES.task_new}" style="aspect-ratio:1;">
                            <span class="timeline-photo-label" style="font-size: 7px;">2. Nova</span>
                        </div>
                        <div class="timeline-photo-card" style="padding: 2px;">
                            <img src="${t.fotos.concluido || MOCK_IMAGES.task_done}" style="aspect-ratio:1;">
                            <span class="timeline-photo-label" style="font-size: 7px;">3. Pronto</span>
                        </div>
                    </div>
                ` : `
                    <div style="font-size: 10px; color: var(--text-muted); font-style: italic;">Auditoria fotográfica em progresso...</div>
                `}
            </div>
        `;
    });

    stepService.innerHTML = `
        <span class="timeline-badge">Fase 3: Execução</span>
        <h4 class="timeline-title">Auditoria de Box e Troca de Peças</h4>
        <p class="timeline-desc" style="margin-bottom: 10px;">Registro fotográfico do "Antes", "Novo" e "Instalado" para cada reparo solicitado.</p>
        ${tasksDossierHtml}
    `;
    container.appendChild(stepService);

    // STEP 4: DELIVERY
    const stepDelivery = document.createElement("div");
    stepDelivery.className = `timeline-item ${serviceDone ? 'completed' : ''}`;
    
    stepDelivery.innerHTML = `
        <span class="timeline-badge">Fase 4: Finalizado</span>
        <h4 class="timeline-title">Liberação & Entrega Garantida</h4>
        ${serviceDone ? `
            <p class="timeline-desc">O veículo foi higienizado, revisado e está pronto para retirada.</p>
            <div style="border-radius: var(--border-radius-sm); overflow:hidden; border: 1px solid var(--border-color); margin-top: 8px;">
                <img src="${MOCK_IMAGES.car_clean}" alt="Ready Car" style="width: 100%; display:block;">
            </div>
        ` : `
            <p class="timeline-desc">Aguardando a conclusão dos serviços mecânicos.</p>
        `}
    `;
    container.appendChild(stepDelivery);
}

// -------------------------------------------------------------
// HELPER UI FUNCTIONS
// -------------------------------------------------------------
function showToast(message) {
    const toast = document.getElementById("toast");
    document.getElementById("toast-message").textContent = message;
    
    toast.classList.add("active");
    
    // Auto hide
    setTimeout(() => {
        toast.classList.remove("active");
    }, 3000);
}

function showSuccessOverlay(title, subtitle, onCompleteCallback) {
    const overlay = document.getElementById("success-overlay");
    document.getElementById("success-message-title").textContent = title;
    document.getElementById("success-message-subtitle").textContent = subtitle;
    
    overlay.classList.add("active");
    
    // Keep visible for 1.8 seconds, then execute navigation callback
    setTimeout(() => {
        overlay.classList.remove("active");
        if (onCompleteCallback) onCompleteCallback();
    }, 1800);
}
