export interface TestCase {
  id: string;
  name: string;
  description: string;
  type: TestType;
  input: string;
  expectedOutput?: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  success?: boolean;
  response?: string;
  timestamp?: string;
}

export type TestType = 
  | 'social-engineering'
  | 'command-injection'
  | 'chain-of-thought'
  | 'data-exfiltration'
  | 'obfuscated-payloads'
  | 'script-embedded'
  | 'nested-payloads';

export interface TestResult {
  testId: string;
  success: boolean;
  response: string;
  timestamp: string;
  severity: string;
}

export interface TestEnvironment {
  id: TestType;
  name: string;
  description: string;
  icon: string;
}