'use strict';
/** Mounts every API route under /api. */

const express = require('express');
const { resource } = require('../lib/resource');

const router = express.Router();

router.use('/auth', require('./auth'));
router.use('/state', require('./state'));
router.use('/reports', require('./reports'));
router.use('/audit', require('./audit'));

// ---------------------------------------------------------------------
// Resource endpoints - conventional CRUD over the core tables
// ---------------------------------------------------------------------

router.use('/tickets', resource({
  table: 'tickets',
  entity: 'tickets',
  searchable: ['id', 'sender', 'subject', 'preview', 'desk', 'owner'],
  filterable: ['folder', 'desk', 'owner', 'priority', 'channel', 'status',
    'unread', 'starred', 'breached', 'case_id'],
  defaultSort: 'position',
  children: {
    messages: { table: 'ticket_messages', fk: 'ticket_id', orderBy: 'position' },
    attachments: { table: 'attachments', fk: 'ticket_id', orderBy: 'id' },
    labels: { table: 'ticket_labels', fk: 'ticket_id', orderBy: 'label_id' },
  },
}));

router.use('/cases', resource({
  table: 'cases',
  entity: 'cases',
  searchable: ['id', 'patient', 'manager'],
  filterable: ['status', 'stage', 'manager'],
  children: {
    timeline: { table: 'case_timeline', fk: 'case_id', orderBy: 'position' },
    documents: { table: 'case_documents', fk: 'case_id', orderBy: 'position' },
  },
}));

router.use('/orders', resource({
  table: 'orders',
  entity: 'orders',
  searchable: ['id', 'patient', 'drug', 'country', 'owner'],
  filterable: ['stage', 'completed', 'at_risk', 'cold_chain', 'case_id', 'owner', 'payment_state'],
  defaultSort: 'position',
}));

router.use('/wave', resource({
  table: 'wave_lines',
  entity: 'wave',
  searchable: ['id', 'patient', 'drug', 'batch', 'location'],
  filterable: ['state', 'fefo', 'cold_chain'],
  defaultSort: 'position',
}));

router.use('/rfqs', resource({
  table: 'rfqs',
  entity: 'rfqs',
  searchable: ['id', 'drug', 'spec', 'destination'],
  filterable: ['status', 'case_id'],
  children: { lines: { table: 'rfq_lines', fk: 'rfq_id', orderBy: 'position' } },
}));

router.use('/quotes', resource({
  table: 'quotes',
  entity: 'quotes',
  searchable: ['id', 'patient', 'drug'],
  filterable: ['status', 'case_id', 'rfq_id'],
  children: { options: { table: 'quote_options', fk: 'quote_id', orderBy: 'position' } },
}));

router.use('/qa', resource({
  table: 'qa_batches',
  entity: 'qa',
  searchable: ['id', 'product', 'batch', 'supplier', 'for_whom'],
  filterable: ['status', 'temp_ok', 'assigned_to_me', 'supplier_id'],
  defaultSort: 'position',
  children: { checks: { table: 'qa_checks', fk: 'batch_id', orderBy: 'position' } },
}));

router.use('/deviations', resource({
  table: 'qa_deviations',
  entity: 'qa',
  searchable: ['id', 'batch', 'what'],
  filterable: ['severity', 'state'],
}));

router.use('/prescriptions', resource({
  table: 'prescriptions',
  entity: 'prescriptions',
  searchable: ['id', 'patient', 'drug', 'prescriber', 'hospital', 'mrn'],
  filterable: ['status', 'country', 'sla_breached', 'assigned_to_me', 'case_id'],
  defaultSort: 'position',
  children: { checks: { table: 'rx_checks', fk: 'rx_id', orderBy: 'position' } },
}));

router.use('/rx-queries', resource({
  table: 'rx_queries',
  entity: 'prescriptions',
  searchable: ['id', 'patient', 'question'],
  filterable: ['state', 'rx_id'],
  defaultSort: 'position',
}));

router.use('/suppliers', resource({
  table: 'suppliers',
  entity: 'suppliers',
  searchable: ['id', 'name', 'code', 'country', 'city', 'contact', 'email'],
  filterable: ['status', 'country', 'category', 'currency'],
  children: {
    certificates: { table: 'supplier_certificates', fk: 'supplier_id', orderBy: 'id' },
  },
}));

router.use('/employees', resource({
  table: 'employees',
  entity: 'employees',
  searchable: ['id', 'name', 'department'],
  filterable: ['department', 'status'],
  defaultSort: 'position',
  children: { benefits: { table: 'employee_benefits', fk: 'employee_id', orderBy: 'benefit_id' } },
}));

router.use('/leave', resource({
  table: 'leave_requests',
  entity: 'leave',
  searchable: ['id', 'who', 'department', 'reason'],
  filterable: ['status', 'department', 'leave_type', 'is_mine', 'has_clash', 'employee_id'],
  defaultSort: 'position',
}));

router.use('/holidays', resource({
  table: 'holidays',
  entity: 'holidays',
  searchable: ['id', 'name', 'offices'],
  filterable: ['holiday_type'],
  defaultSort: 'position',
}));

router.use('/labels', resource({
  table: 'labels', entity: 'settings',
  searchable: ['name'], defaultSort: 'position',
}));

router.use('/notifications', resource({
  table: 'notifications', entity: 'settings',
  searchable: ['title', 'detail'], filterable: ['is_read'], defaultSort: 'position',
}));

router.use('/routing-rules', resource({
  table: 'routing_rules', entity: 'settings',
  searchable: ['keywords', 'desk'], filterable: ['desk', 'active'], defaultSort: 'position',
}));

router.use('/desks', resource({
  table: 'desks', entity: 'settings',
  searchable: ['name'], defaultSort: 'position',
}));

module.exports = router;
