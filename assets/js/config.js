// CONFIGURACIÓN PRINCIPAL - FÁCIL DE MODIFICAR
const NEXUS_CONFIG = {
    site: {
        name: "NEXUS",
        version: "1.0",
        description: "Centro de Control Unificado"
    },
    
    // APLICACIONES - FÁCIL DE AGREGAR NUEVAS
    applications: [
        {
            id: "telegram-bot",
            title: "🤖 Control Telegram",
            description: "Gestiona bots de Telegram",
            icon: "fas fa-robot",
            url: "https://tuusuario.github.io/telegram-bot-control/",
            category: "apps",
            status: "active",
            badge: "new"
        },
        {
            id: "instagram-tool",
            title: "📸 Herramientas Instagram",
            description: "Suite completa para Instagram",
            icon: "fab fa-instagram",
            url: "https://tuusuario.github.io/instagram-tools/",
            category: "apps",
            status: "active"
        },
        {
            id: "file-converter",
            title: "🔄 Convertidor Archivos",
            description: "Convierte entre formatos",
            icon: "fas fa-file-export",
            url: "https://tuusuario.github.io/file-converter/",
            category: "tools",
            status: "active"
        },
        {
            id: "password-manager",
            title: "🔐 Gestor Contraseñas",
            description: "Almacenamiento seguro",
            icon: "fas fa-lock",
            url: "https://tuusuario.github.io/password-manager/",
            category: "tools",
            status: "development",
            badge: "dev"
        }
    ],
    
    // ESTADÍSTICAS DEL DASHBOARD
    dashboardStats: [
        {
            id: "total-apps",
            value: "4",
            label: "Aplicaciones",
            icon: "fas fa-cubes"
        },
        {
            id: "active-services",
            value: "3",
            label: "Servicios Activos",
            icon: "fas fa-check-circle"
        },
        {
            id: "uptime",
            value: "99.9%",
            label: "Tiempo Activo",
            icon: "fas fa-clock"
        },
        {
            id: "performance",
            value: "Optimo",
            label: "Rendimiento",
            icon: "fas fa-tachometer-alt"
        }
    ],
    
    // TARJETAS DEL DASHBOARD
    dashboardCards: [
        {
            id: "welcome-card",
            title: "Bienvenido a NEXUS",
            description: "Centro de control unificado para todas tus herramientas y aplicaciones. Gestiona todo desde un solo lugar.",
            icon: "fas fa-star",
            stats: [
                { value: "4", label: "Apps" },
                { value: "100%", label: "Online" }
            ]
        },
        {
            id: "quick-actions",
            title: "Acciones Rápidas",
            description: "Accede a las herramientas más utilizadas directamente desde el dashboard.",
            icon: "fas fa-bolt",
            stats: [
                { value: "3", label: "Activas" },
                { value: "1", label: "Nueva" }
            ]
        }
    ]
};
