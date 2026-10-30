CREATE TABLE IF NOT EXISTS producto (
    codigo VARCHAR(50) NOT NULL,
    descripcion VARCHAR(255) NOT NULL,
    unidad VARCHAR(50) NOT NULL,
    costo DECIMAL(12, 2) NOT NULL DEFAULT 0.00,
    precio DECIMAL(12, 2) NOT NULL DEFAULT 0.00,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (codigo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO producto (codigo, descripcion, unidad, costo, precio) 
VALUES 
    ('CEM-001', 'Cemento Gris Tipo UG x 50kg', 'bulto', 28000.00, 34500.00),
    ('VAR-002', 'Varilla Corrugada 1/2 pulgada x 6m', 'unidad', 19500.00, 24000.00),
    ('CLA-003', 'Clavo para Madera 2 1/2 pulgadas', 'libras', 3500.00, 5200.00),
    ('TUB-004', 'Tubo PVC Sanitario 3 pulgadas x 3m', 'unidad', 32000.00, 41000.00),
    ('CAB-005', 'Cable Eléctrico Cobre No. 12 THHN', 'metro', 1800.00, 2600.00)
ON DUPLICATE KEY UPDATE 
    descripcion = VALUES(descripcion),
    unidad = VALUES(unidad),
    costo = VALUES(costo),
    precio = VALUES(precio);
