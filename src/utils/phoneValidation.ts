/**
 * Belarusian Phone Mask and Validator (+375)
 * Supported prefix codes: 29, 33, 44, 25, 17
 */

export function formatBYPhone(input: string): string {
  // Strip everything except digits
  let digits = input.replace(/\D/g, '');

  // Handle prefix if user typed 80...
  if (digits.startsWith('80') && digits.length > 2) {
    digits = '375' + digits.slice(2);
  } else if (digits.startsWith('8') && digits.length === 1) {
    digits = '375';
  } else if (!digits.startsWith('375')) {
    if (digits.startsWith('37')) {
      // keep
    } else if (digits.startsWith('3')) {
      // keep
    } else if (digits.length > 0) {
      digits = '375' + digits;
    }
  }

  // Cap at 12 digits (375 XX XXX XX XX)
  digits = digits.slice(0, 12);

  // Format into +375 (XX) XXX-XX-XX
  if (digits.length === 0) return '';
  if (digits.length <= 3) return `+${digits}`;
  
  const country = digits.slice(0, 3); // 375
  const rest = digits.slice(3);

  if (rest.length <= 2) {
    return `+${country} (${rest}`;
  }
  if (rest.length <= 5) {
    return `+${country} (${rest.slice(0, 2)}) ${rest.slice(2)}`;
  }
  if (rest.length <= 7) {
    return `+${country} (${rest.slice(0, 2)}) ${rest.slice(2, 5)}-${rest.slice(5)}`;
  }
  return `+${country} (${rest.slice(0, 2)}) ${rest.slice(2, 5)}-${rest.slice(5, 7)}-${rest.slice(7, 9)}`;
}

export function isValidBYPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, '');
  if (digits.length !== 12) return false;
  if (!digits.startsWith('375')) return false;

  const operatorCode = digits.slice(3, 5);
  // Valid Belarusian mobile & city codes: 29, 33, 44, 25, 17
  const validCodes = ['29', '33', '44', '25', '17'];
  return validCodes.includes(operatorCode);
}
