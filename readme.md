<h1>Postfix Prefix Calculator</h1>
<br>
<br>
<h2>Postfix Expressions</h2>
<br>
<p>A postfix expression (also called Reverse Polish Notation) is a single letter or an operator, preceded by two postfix strings. Every postfix string longer than a single variable contains first and second operands followed by an operator.e.g. A,A B +,A B + C D –.</p>
<br>
<p>For example: 
<br>Expression: 9 2 3 * +
<br>Steps:
<ol>
    <li>Start with the first operator *: 2 * 3 = 6.</li>
    <li>Add 9 + 6 = 15.</li>
</ol>
<br>
Result: 15
</p>
<br>
<br>

<h2>Prefix Expressions</h2>
<br>
<p>A prefix expression is a expression in which first operator comes and proceded by strings. Every prefix string longer than a single variable contains first and second operands followed by an operator.e.g. A,+A B ,*A B ,+ * A B/ C D.</p>
<br>
<p>For example:
<br>Expression: + 9 * 2 3
<br>Steps:
<ol>
    <li>Start from the rightmost operand: 9 and * 2 3.</li>
    <li>Evaluate * 2 3 → 2 * 3 = 6.</li>
    <li>Add 9 + 6 = 15.</li>
</ol>
<br>
Result: 15
</p>
