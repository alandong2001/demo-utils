# Demo Utils

A simple utility library for demonstration purposes.

## Installation

```bash
npm install demo-utils
```

## Usage

```typescript
import { capitalize, truncate, reverseString } from 'demo-utils';
```

## Functions

### `capitalize(str: string): string`
Capitalizes the first letter of a string.

```typescript
capitalize("hello world"); // "Hello world"
capitalize("HELLO"); // "HELLO"
```

### `truncate(str: string, maxLength: number): string`
Truncates a string to the specified maximum length and adds ellipsis if needed.

```typescript
truncate("This is a long string", 10); // "This is a..."
truncate("Short", 10); // "Short"
```

### `reverseString(str: string): string`
Reverses the characters in a string.

```typescript
reverseString("hello"); // "olleh"
reverseString("world"); // "dlrow"
reverseString("12345"); // "54321"
```
