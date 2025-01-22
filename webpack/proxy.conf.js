/*
 * Erp System - Mark I No 2 (Beniah Series) Client 0.0.1-SNAPSHOT
 * Copyright © 2021 - 2025 Edwin Njeru (mailnjeru@gmail.com)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
function setupProxy({ tls }) {
  const serverResources = ['/api', '/services', '/management', '/v3/api-docs', '/h2-console', '/health'];
  const port = process.env.SERVER_PORT || '8386'; // Default to 8386 for development
  return [
    {
      context: serverResources,
      target: `http${tls ? 's' : ''}://localhost:${port}`,
      secure: false,
      changeOrigin: tls,
    },
    {
      context: ['/websocket'],
      target: `ws://10.60.27.22:${port}`,
      // target: process.env.CSERVER_API_WS_URL_HOST,
      ws: true,
    },
  ];
}

module.exports = setupProxy;
