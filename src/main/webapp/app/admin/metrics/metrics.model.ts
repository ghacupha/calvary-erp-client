///
/// Erp System - Mark I No 2 (Beniah Series) Client 0.0.1-SNAPSHOT
/// Copyright © 2022 - 2025 Edwin Njeru (mailnjeru@gmail.com)
///
/// This program is free software: you can redistribute it and/or modify
/// it under the terms of the GNU General Public License as published by
/// the Free Software Foundation, either version 3 of the License, or
/// (at your option) any later version.
///
/// This program is distributed in the hope that it will be useful,
/// but WITHOUT ANY WARRANTY; without even the implied warranty of
/// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
/// GNU General Public License for more details.
///
/// You should have received a copy of the GNU General Public License
/// along with this program. If not, see <http://www.gnu.org/licenses/>.
///

export interface Metrics {
  jvm: Record<string, JvmMetrics>;
  databases: Databases;
  'http.server.requests': HttpServerRequests;
  cache: Record<string, CacheMetrics>;
  garbageCollector: GarbageCollector;
  services: Services;
  processMetrics: ProcessMetrics;
}

export interface JvmMetrics {
  committed: number;
  max: number;
  used: number;
}

export interface Databases {
  min: Value;
  idle: Value;
  max: Value;
  usage: MetricsWithPercentile;
  pending: Value;
  active: Value;
  acquire: MetricsWithPercentile;
  creation: MetricsWithPercentile;
  connections: Value;
}

export interface Value {
  value: number;
}

export interface MetricsWithPercentile {
  '0.0': number;
  '1.0': number;
  max: number;
  totalTime: number;
  mean: number;
  '0.5': number;
  count: number;
  '0.99': number;
  '0.75': number;
  '0.95': number;
}

export interface HttpServerRequests {
  all: {
    count: number;
  };
  percode: Record<string, MaxMeanCount>;
}

export interface MaxMeanCount {
  max: number;
  mean: number;
  count: number;
}

export interface CacheMetrics {
  'cache.gets.miss': number;
  'cache.puts': number;
  'cache.gets.hit': number;
  'cache.removals': number;
  'cache.evictions': number;
}

export interface GarbageCollector {
  'jvm.gc.max.data.size': number;
  'jvm.gc.pause': MetricsWithPercentile;
  'jvm.gc.memory.promoted': number;
  'jvm.gc.memory.allocated': number;
  classesLoaded: number;
  'jvm.gc.live.data.size': number;
  classesUnloaded: number;
}

export type Services = Record<string, Record<HttpMethod, MaxMeanCount>>;

export enum HttpMethod {
  Post = 'POST',
  Get = 'GET',
  Put = 'PUT',
  Patch = 'PATCH',
  Delete = 'DELETE',
}

export interface ProcessMetrics {
  'system.cpu.usage': number;
  'system.cpu.count': number;
  'system.load.average.1m'?: number;
  'process.cpu.usage': number;
  'process.files.max'?: number;
  'process.files.open'?: number;
  'process.start.time': number;
  'process.uptime': number;
}

export interface ThreadDump {
  threads: Thread[];
}

export interface Thread {
  threadName: string;
  threadId: number;
  blockedTime: number;
  blockedCount: number;
  waitedTime: number;
  waitedCount: number;
  lockName: string | null;
  lockOwnerId: number;
  lockOwnerName: string | null;
  daemon: boolean;
  inNative: boolean;
  suspended: boolean;
  threadState: ThreadState;
  priority: number;
  stackTrace: StackTrace[];
  lockedMonitors: LockedMonitor[];
  lockedSynchronizers: string[];
  lockInfo: LockInfo | null;
  // custom field for showing-hiding thread dump
  showThreadDump?: boolean;
}

export interface LockInfo {
  className: string;
  identityHashCode: number;
}

export interface LockedMonitor {
  className: string;
  identityHashCode: number;
  lockedStackDepth: number;
  lockedStackFrame: StackTrace;
}

export interface StackTrace {
  classLoaderName: string | null;
  moduleName: string | null;
  moduleVersion: string | null;
  methodName: string;
  fileName: string;
  lineNumber: number;
  className: string;
  nativeMethod: boolean;
}

export enum ThreadState {
  Runnable = 'RUNNABLE',
  TimedWaiting = 'TIMED_WAITING',
  Waiting = 'WAITING',
  Blocked = 'BLOCKED',
  New = 'NEW',
}
