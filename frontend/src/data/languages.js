import {
  SiPython,
  SiOpenjdk,
  SiC,
  SiCplusplus,
  SiSharp,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";

export const languages = [
  {
    slug: "python",
    name: "Python",
    icon: "python",
    iconComponent: SiPython,
    prismLang: "python",
    tagline: "Readability counts.",
    brief:
      "The language that taught the world that code should read like prose. Python trades ceremony for clarity — and quietly became the backbone of modern AI, data science, and automation.",
    year: "1991",
    creator: "Guido van Rossum",
    paradigm: "Multi-paradigm, Object-Oriented",
    typing: "Dynamic, Strongly Typed",
    stats: [
      { label: "Popularity", value: 98 },
      { label: "Beginner Friendliness", value: 95 },
      { label: "Raw Performance", value: 42 },
      { label: "Job Demand", value: 96 },
    ],
    description: [
      "Python was born over a Christmas holiday in 1989, when Guido van Rossum set out to build a language that valued the programmer's time over the machine's. Its philosophy — captured in the Zen of Python — insists that beautiful is better than ugly, explicit is better than implicit, and simple is better than complex.",
      "Three decades later, that bet paid off beyond imagination. Python is the lingua franca of artificial intelligence, the default tool of data scientists, and the first language taught in most universities. Its enormous ecosystem — NumPy, Pandas, TensorFlow, Django, FastAPI — means there is almost no problem that doesn't already have a Python library waiting for it.",
      "Python is not fast in the way C is fast, and it was never meant to be. It optimizes for a different currency: how quickly a human can go from an idea to a working program.",
    ],
    basics: [
      {
        title: "Variables & Types",
        note: "No declarations, no type keywords. A name simply binds to a value.",
        code: 'name = "Ada"\nage = 36\npi = 3.14159\nis_dev = True',
      },
      {
        title: "Control Flow",
        note: "Indentation is syntax. Blocks are defined by spaces, not braces.",
        code: 'if age >= 18:\n    print("adult")\nelse:\n    print("minor")',
      },
      {
        title: "Functions",
        note: "Defined with def. Arguments can carry defaults and keywords.",
        code: "def greet(name, punct=\"!\"):\n    return f\"Hello, {name}{punct}\"\n\nprint(greet(\"World\"))",
      },
      {
        title: "Collections",
        note: "Lists, dicts, tuples and sets cover nearly every data shape.",
        code: 'langs = ["python", "c", "go"]\nscores = {"ada": 10, "alan": 9}\nprint(langs[0], scores["ada"])',
      },
    ],
    snippetFile: "fibonacci.py",
    snippet:
      "def fibonacci(n):\n    \"\"\"Yield the first n Fibonacci numbers.\"\"\"\n    a, b = 0, 1\n    for _ in range(n):\n        yield a\n        a, b = b, a + b\n\n\nnumbers = list(fibonacci(10))\nprint(numbers)\n# [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]\n\nsquares = [x * x for x in numbers if x % 2 == 0]\nprint(\"Even squares:\", squares)",
    timeline: [
      { year: "1991", event: "Python 0.9.0 released with exceptions, functions, and the core types." },
      { year: "2000", event: "Python 2.0 adds list comprehensions and garbage collection." },
      { year: "2008", event: "Python 3.0 cleans up the language — a bold, backward-incompatible reset." },
      { year: "2015", event: "Type hints land via PEP 484, blending gradual typing into the ecosystem." },
      { year: "2020s", event: "Python becomes the undisputed language of the AI revolution." },
    ],
    useCases: [
      { title: "Artificial Intelligence", detail: "PyTorch, TensorFlow and scikit-learn make Python the native tongue of machine learning research and production." },
      { title: "Data Science", detail: "Pandas, NumPy and Jupyter turned Python into an interactive laboratory for exploring data." },
      { title: "Web Backends", detail: "Django and FastAPI power products from Instagram to Stripe's internal tooling." },
      { title: "Automation & Scripting", detail: "DevOps pipelines, web scrapers, and a million tiny scripts that glue the internet together." },
    ],
    pros: [
      "Reads almost like English — the fastest language from idea to working code.",
      "A library for everything: the ecosystem is unmatched in breadth.",
      "Huge, welcoming community and endless learning resources.",
    ],
    cons: [
      "Interpreted execution makes it slow for CPU-bound work.",
      "The GIL limits true multi-threaded parallelism.",
      "Dynamic typing lets entire classes of bugs slip to runtime.",
    ],
  },
  {
    slug: "java",
    name: "Java",
    icon: "java",
    iconComponent: SiOpenjdk,
    prismLang: "java",
    tagline: "Write once, run anywhere.",
    brief:
      "The workhorse of the enterprise. Java turned the promise of portable software into reality and still runs the back offices of banks, airlines, and billions of Android devices.",
    year: "1995",
    creator: "James Gosling · Sun Microsystems",
    paradigm: "Object-Oriented, Class-Based",
    typing: "Static, Strongly Typed",
    stats: [
      { label: "Popularity", value: 88 },
      { label: "Beginner Friendliness", value: 62 },
      { label: "Raw Performance", value: 82 },
      { label: "Job Demand", value: 90 },
    ],
    description: [
      "Java emerged in 1995 from Sun Microsystems with a radical promise: compile your code once, and run it on any machine with a Java Virtual Machine. At a time when software was chained to specific operating systems, this was revolutionary.",
      "The language enforced discipline — explicit types, classes everywhere, checked exceptions — and that discipline became its superpower. Massive teams at banks, insurers, and governments could build systems that lived for decades. The JVM matured into one of the most sophisticated pieces of engineering in software: adaptive JIT compilation, world-class garbage collectors, and observability that newer runtimes still chase.",
      "Modern Java has shed much of its verbosity with records, sealed classes, and pattern matching — but its soul remains the same: boring, predictable, and utterly dependable at planetary scale.",
    ],
    basics: [
      {
        title: "Variables & Types",
        note: "Every variable declares its type up front. The compiler enforces it.",
        code: "String name = \"Grace\";\nint age = 85;\ndouble pi = 3.14159;\nboolean isDev = true;",
      },
      {
        title: "Control Flow",
        note: "Classic C-style syntax with braces and parentheses.",
        code: "if (age >= 18) {\n    System.out.println(\"adult\");\n} else {\n    System.out.println(\"minor\");\n}",
      },
      {
        title: "Methods & Classes",
        note: "Everything lives inside a class. Methods define behavior.",
        code: "public class Greeter {\n    static String greet(String name) {\n        return \"Hello, \" + name + \"!\";\n    }\n}",
      },
      {
        title: "Collections",
        note: "The Collections framework covers lists, maps and sets.",
        code: "List<String> langs = List.of(\"java\", \"kotlin\");\nMap<String, Integer> scores = Map.of(\"grace\", 10);\nSystem.out.println(langs.get(0));",
      },
    ],
    snippetFile: "BankAccount.java",
    snippet:
      "public class BankAccount {\n    private final String owner;\n    private double balance;\n\n    public BankAccount(String owner, double opening) {\n        this.owner = owner;\n        this.balance = opening;\n    }\n\n    public void deposit(double amount) {\n        if (amount <= 0) {\n            throw new IllegalArgumentException(\"Amount must be positive\");\n        }\n        balance += amount;\n    }\n\n    public static void main(String[] args) {\n        var account = new BankAccount(\"Grace\", 100.0);\n        account.deposit(50.0);\n        System.out.println(account.owner + \" -> $\" + account.balance);\n    }\n}",
    timeline: [
      { year: "1995", event: "Java 1.0 launches with the JVM and the 'write once, run anywhere' promise." },
      { year: "2004", event: "Java 5 adds generics, enums, and annotations — the language grows up." },
      { year: "2009", event: "Android adopts Java, putting it in the pockets of billions." },
      { year: "2014", event: "Java 8 brings lambdas and streams, opening the door to functional style." },
      { year: "2021+", event: "Records, sealed classes and virtual threads keep Java modern and fast." },
    ],
    useCases: [
      { title: "Enterprise Systems", detail: "Banking cores, trading platforms and insurance backends — where failure is not an option." },
      { title: "Android Apps", detail: "The original language of Android; millions of apps still run on Java today." },
      { title: "Big Data", detail: "Hadoop, Spark, Kafka and Elasticsearch are all built on the JVM." },
      { title: "Web Backends", detail: "Spring Boot remains one of the most deployed server frameworks on Earth." },
    ],
    pros: [
      "Battle-tested at extreme scale — decades of production hardening.",
      "Superb tooling: IntelliJ, Maven, profilers and debuggers are best in class.",
      "Enormous job market, especially in enterprise and fintech.",
    ],
    cons: [
      "Verbose — simple ideas can take many lines to express.",
      "Slower startup and heavier memory footprint than native languages.",
      "The ceremony can overwhelm beginners before they see any results.",
    ],
  },
  {
    slug: "c",
    name: "C",
    icon: "c",
    iconComponent: SiC,
    prismLang: "c",
    tagline: "The mother tongue.",
    brief:
      "Fifty years old and still running the world. C is the layer beneath everything — operating systems, databases, and even the interpreters of most other languages on this list.",
    year: "1972",
    creator: "Dennis Ritchie · Bell Labs",
    paradigm: "Procedural, Imperative",
    typing: "Static, Weakly Typed",
    stats: [
      { label: "Popularity", value: 80 },
      { label: "Beginner Friendliness", value: 40 },
      { label: "Raw Performance", value: 99 },
      { label: "Job Demand", value: 74 },
    ],
    description: [
      "In 1972 at Bell Labs, Dennis Ritchie created C to build Unix — and in doing so, created the foundation of modern computing. Linux, Windows, macOS, PostgreSQL, Git, the Python interpreter itself: all written in C.",
      "C gives you almost nothing and therefore asks almost nothing. No garbage collector, no runtime, no objects — just you, memory, and the machine. A thin layer of abstraction over assembly, it compiles down to code that runs about as fast as the hardware allows.",
      "Learning C is learning how computers actually work: pointers, memory layout, the stack and the heap. It is unforgiving — one wrong pointer and your program crashes — but that discipline produces programmers who understand what every other language is doing beneath the surface.",
    ],
    basics: [
      {
        title: "Variables & Types",
        note: "Types map directly to machine words. Sizes matter.",
        code: "char name[] = \"Dennis\";\nint age = 70;\ndouble pi = 3.14159;",
      },
      {
        title: "Control Flow",
        note: "The syntax that a dozen languages copied.",
        code: "if (age >= 18) {\n    printf(\"adult\\n\");\n} else {\n    printf(\"minor\\n\");\n}",
      },
      {
        title: "Functions & Pointers",
        note: "Functions are flat; pointers give you raw memory addresses.",
        code: "void swap(int *a, int *b) {\n    int tmp = *a;\n    *a = *b;\n    *b = tmp;\n}",
      },
      {
        title: "Memory Management",
        note: "You ask for memory with malloc — and you must give it back.",
        code: "int *nums = malloc(10 * sizeof(int));\nnums[0] = 42;\nfree(nums);",
      },
    ],
    snippetFile: "stack.c",
    snippet:
      "#include <stdio.h>\n#include <stdlib.h>\n\n#define CAPACITY 100\n\ntypedef struct {\n    int items[CAPACITY];\n    int top;\n} Stack;\n\nvoid push(Stack *s, int value) {\n    if (s->top >= CAPACITY) {\n        fprintf(stderr, \"stack overflow\\n\");\n        exit(1);\n    }\n    s->items[s->top++] = value;\n}\n\nint pop(Stack *s) {\n    if (s->top == 0) {\n        fprintf(stderr, \"stack underflow\\n\");\n        exit(1);\n    }\n    return s->items[--s->top];\n}\n\nint main(void) {\n    Stack s = {.top = 0};\n    push(&s, 1972);\n    printf(\"%d\\n\", pop(&s));\n    return 0;\n}",
    timeline: [
      { year: "1972", event: "Dennis Ritchie builds C at Bell Labs to rewrite Unix." },
      { year: "1978", event: "K&R C published — 'The C Programming Language' becomes scripture." },
      { year: "1989", event: "ANSI standardizes C, cementing it as the portable systems language." },
      { year: "1991", event: "Linus Torvalds writes the Linux kernel in C." },
      { year: "Today", event: "C still ranks in the top 3 of every language index, five decades on." },
    ],
    useCases: [
      { title: "Operating Systems", detail: "Linux, Windows and macOS kernels are overwhelmingly written in C." },
      { title: "Embedded Systems", detail: "From microwaves to Mars rovers — anywhere resources are measured in kilobytes." },
      { title: "Language Runtimes", detail: "CPython, Ruby's MRI, and the reference implementations of many languages." },
      { title: "Databases & Infrastructure", detail: "PostgreSQL, SQLite, Redis and Nginx all trust C with the world's data." },
    ],
    pros: [
      "Unmatched performance and control — as close to the metal as high-level gets.",
      "Teaches you exactly how computers work: memory, pointers, the CPU.",
      "Runs everywhere — there is a C compiler for nearly every chip ever made.",
    ],
    cons: [
      "Manual memory management invites leaks, overflows and security holes.",
      "No built-in safety nets: no bounds checking, no exceptions, no GC.",
      "Building large applications requires far more effort than modern languages.",
    ],
  },
  {
    slug: "cpp",
    name: "C++",
    icon: "cpp",
    iconComponent: SiCplusplus,
    prismLang: "cpp",
    tagline: "Zero-cost abstractions.",
    brief:
      "C's raw power fused with industrial-strength abstraction. C++ is where performance is non-negotiable — game engines, browsers, trading systems, and rockets.",
    year: "1985",
    creator: "Bjarne Stroustrup · Bell Labs",
    paradigm: "Multi-paradigm, Object-Oriented + Generic",
    typing: "Static, Strongly Typed",
    stats: [
      { label: "Popularity", value: 82 },
      { label: "Beginner Friendliness", value: 35 },
      { label: "Raw Performance", value: 99 },
      { label: "Job Demand", value: 78 },
    ],
    description: [
      "Bjarne Stroustrup wanted the organization of high-level languages without surrendering a single CPU cycle. The result, C++, is built on one obsessive principle: you don't pay for what you don't use, and what you do use compiles to code as fast as hand-tuned C.",
      "That philosophy made C++ the language of performance-critical software. Chrome and Firefox are written in it. Unreal Engine and most AAA games are written in it. The high-frequency trading systems that move markets in microseconds are written in it. So are the flight computers of spacecraft.",
      "C++ is also famously vast — a multi-paradigm giant spanning object-oriented, generic, and functional styles. Modern C++ (C++11 and beyond) with smart pointers, move semantics and ranges is a different, far safer language than its reputation suggests — but mastery remains a multi-year journey.",
    ],
    basics: [
      {
        title: "Variables & Types",
        note: "Statically typed with precise control over memory layout.",
        code: "std::string name = \"Bjarne\";\nint age = 73;\ndouble pi = 3.14159;\nauto isDev = true;",
      },
      {
        title: "Control Flow",
        note: "C-style flow with structured bindings and ranges in modern C++.",
        code: "if (age >= 18) {\n    std::cout << \"adult\\n\";\n} else {\n    std::cout << \"minor\\n\";\n}",
      },
      {
        title: "Functions & Templates",
        note: "Generics resolved at compile time — abstraction with zero runtime cost.",
        code: "template <typename T>\nT add(T a, T b) {\n    return a + b;\n}",
      },
      {
        title: "RAII & Smart Pointers",
        note: "Resources clean themselves up when objects go out of scope.",
        code: "auto nums = std::make_unique<std::vector<int>>();\nnums->push_back(42);\n// memory freed automatically",
      },
    ],
    snippetFile: "particle.cpp",
    snippet:
      "#include <iostream>\n#include <memory>\n#include <string>\n#include <vector>\n\nstruct Vec3 {\n    double x, y, z;\n\n    Vec3 operator+(const Vec3& o) const {\n        return {x + o.x, y + o.y, z + o.z};\n    }\n};\n\nclass Particle {\npublic:\n    Particle(std::string name, Vec3 pos) : name_(std::move(name)), pos_(pos) {}\n\n    void apply(const Vec3& force) { pos_ = pos_ + force; }\n\n    void print() const {\n        std::cout << name_ << \" @ (\" << pos_.x << \", \" << pos_.y << \", \" << pos_.z << \")\\n\";\n    }\n\nprivate:\n    std::string name_;\n    Vec3 pos_;\n};\n\nint main() {\n    std::vector<std::unique_ptr<Particle>> world;\n    world.push_back(std::make_unique<Particle>(\"quark\", Vec3{0, 0, 0}));\n    world[0]->apply({1.5, 2.0, -0.5});\n    world[0]->print();\n}",
    timeline: [
      { year: "1985", event: "Cfront 1.0 ships — 'C with Classes' becomes C++." },
      { year: "1998", event: "First ISO standard: the STL brings vectors, maps and algorithms." },
      { year: "2011", event: "C++11 — smart pointers, lambdas, auto. 'Modern C++' is born." },
      { year: "2020", event: "C++20 adds concepts, ranges and coroutines." },
      { year: "Today", event: "Powers game engines, browsers, and the fastest systems ever built." },
    ],
    useCases: [
      { title: "Game Engines", detail: "Unreal Engine, Unity's core, and nearly every AAA title runs on C++." },
      { title: "Browsers & Runtimes", detail: "Chrome, Firefox and the V8 JavaScript engine are C++ codebases." },
      { title: "High-Frequency Trading", detail: "When microseconds are money, C++ is the only serious option." },
      { title: "Robotics & Aerospace", detail: "Real-time constraints and hardware access make C++ the default choice." },
    ],
    pros: [
      "Peak performance with high-level abstractions that cost nothing at runtime.",
      "Total control over memory, layout and hardware.",
      "A massive legacy codebase means endless high-paying work.",
    ],
    cons: [
      "Enormous and complex — decades of accumulated features to learn.",
      "Cryptic compiler errors, especially with templates.",
      "Undefined behavior lurks everywhere; the language trusts you completely.",
    ],
  },
  {
    slug: "csharp",
    name: "C#",
    icon: "csharp",
    iconComponent: SiSharp,
    prismLang: "csharp",
    tagline: "Elegance, engineered.",
    brief:
      "Microsoft's answer to Java grew into one of the most thoughtfully designed languages ever made — the heart of .NET, enterprise software, and the Unity game engine.",
    year: "2000",
    creator: "Anders Hejlsberg · Microsoft",
    paradigm: "Object-Oriented, Component-Oriented",
    typing: "Static, Strongly Typed",
    stats: [
      { label: "Popularity", value: 78 },
      { label: "Beginner Friendliness", value: 72 },
      { label: "Raw Performance", value: 84 },
      { label: "Job Demand", value: 82 },
    ],
    description: [
      "Designed by Anders Hejlsberg — the mind behind Turbo Pascal and later TypeScript — C# launched in 2000 as the flagship of Microsoft's .NET platform. From day one it aimed to prove that a powerful, statically typed language could also be pleasant.",
      "C# pioneered features years before they became mainstream: properties, LINQ queries, async/await, pattern matching. Many of these ideas later flowed into Java, JavaScript and Python. The language kept evolving at a remarkable pace while .NET transformed from a Windows-only framework into a fast, open-source, cross-platform runtime.",
      "Today C# quietly dominates two very different worlds: the enterprise back office and the game industry, where Unity uses it to script more than half of all games ever shipped.",
    ],
    basics: [
      {
        title: "Variables & Types",
        note: "Statically typed, with var for clean type inference.",
        code: "string name = \"Anders\";\nint age = 64;\ndouble pi = 3.14159;\nvar isDev = true;",
      },
      {
        title: "Control Flow",
        note: "Familiar C-family syntax with expressive pattern matching.",
        code: "if (age >= 18)\n    Console.WriteLine(\"adult\");\nelse\n    Console.WriteLine(\"minor\");",
      },
      {
        title: "Classes & Properties",
        note: "Properties give you getters and setters without the boilerplate.",
        code: "public class Dev {\n    public string Name { get; set; } = \"\";\n    public string Greet() => $\"Hello, {Name}!\";\n}",
      },
      {
        title: "LINQ",
        note: "Query collections with a fluent, SQL-like vocabulary.",
        code: "var seniors = devs\n    .Where(d => d.Age > 60)\n    .OrderBy(d => d.Name)\n    .ToList();",
      },
    ],
    snippetFile: "Program.cs",
    snippet:
      "using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\nrecord Developer(string Name, string Specialty, int Years);\n\nclass Program\n{\n    static async Task Main()\n    {\n        var team = new List<Developer>\n        {\n            new(\"Anders\", \"Compilers\", 40),\n            new(\"Mads\", \"Language Design\", 20),\n            new(\"Kathleen\", \"Runtime\", 15),\n        };\n\n        var veterans = team\n            .Where(d => d.Years >= 20)\n            .Select(d => $\"{d.Name} — {d.Specialty}\");\n\n        await Task.Delay(100); // async is built into the language\n        foreach (var v in veterans)\n            Console.WriteLine(v);\n    }\n}",
    timeline: [
      { year: "2000", event: "C# 1.0 debuts alongside the .NET Framework." },
      { year: "2007", event: "C# 3.0 introduces LINQ and lambdas — years ahead of the industry." },
      { year: "2012", event: "async/await lands and changes how the world writes concurrent code." },
      { year: "2016", event: ".NET Core goes open-source and cross-platform." },
      { year: "Today", event: "A top-5 language powering enterprise, cloud, and half the world's games." },
    ],
    useCases: [
      { title: "Game Development", detail: "Unity scripts more than 50% of all games — mobile, console, VR — in C#." },
      { title: "Enterprise .NET", detail: "Line-of-business apps, internal tools and government systems worldwide." },
      { title: "Web Backends", detail: "ASP.NET Core is consistently among the fastest web frameworks benchmarked." },
      { title: "Desktop & Cloud", detail: "Windows applications with WPF/WinUI, and Azure-native cloud services." },
    ],
    pros: [
      "Beautifully designed — consistently rated one of the most loved languages.",
      "First-class async, LINQ, and pattern matching built into the core.",
      "One language spans games, web, desktop, mobile and cloud.",
    ],
    cons: [
      "Historically tied to Microsoft's ecosystem, though .NET is now open.",
      "Smaller open-source community than JavaScript or Python.",
      "Some enterprise corners still run on legacy .NET Framework.",
    ],
  },
  {
    slug: "javascript",
    name: "JavaScript",
    icon: "javascript",
    iconComponent: SiJavascript,
    prismLang: "javascript",
    tagline: "The language of the web.",
    brief:
      "Written in ten days in 1995, it now runs on more devices than any language in history. JavaScript is the only language every browser speaks — and it escaped the browser long ago.",
    year: "1995",
    creator: "Brendan Eich · Netscape",
    paradigm: "Multi-paradigm, Prototype-Based",
    typing: "Dynamic, Weakly Typed",
    stats: [
      { label: "Popularity", value: 97 },
      { label: "Beginner Friendliness", value: 80 },
      { label: "Raw Performance", value: 70 },
      { label: "Job Demand", value: 98 },
    ],
    description: [
      "In May 1995, Brendan Eich built JavaScript in ten days at Netscape. Nobody — including Eich — imagined it would become the most deployed language in human history. Every browser on every phone, laptop, TV and car speaks JavaScript natively.",
      "Its survival is a story of evolution. The 2015 ES6 release transformed a quirky scripting toy into a serious language with classes, modules and promises. Node.js took it to the server. React made building interfaces declarative. V8 made it astonishingly fast.",
      "JavaScript is famously chaotic — type coercion jokes are an entire genre — but its reach is absolute. If software is eating the world, JavaScript is doing most of the chewing.",
    ],
    basics: [
      {
        title: "Variables",
        note: "const by default, let when you must reassign, var never again.",
        code: "const name = \"Brendan\";\nlet age = 64;\nconst pi = 3.14159;",
      },
      {
        title: "Control Flow",
        note: "C-family syntax with truthy and falsy quirks to learn.",
        code: "if (age >= 18) {\n  console.log(\"adult\");\n} else {\n  console.log(\"minor\");\n}",
      },
      {
        title: "Functions",
        note: "Functions are first-class values — pass them, return them, store them.",
        code: "const greet = (name) => `Hello, ${name}!`;\nconst shout = (fn) => (x) => fn(x).toUpperCase();\nconsole.log(shout(greet)(\"Web\"));",
      },
      {
        title: "Objects & Arrays",
        note: "The entire language is built on these two shapes.",
        code: "const langs = [\"js\", \"ts\"];\nconst dev = { name: \"Brendan\", year: 1995 };\nconsole.log(dev.name, langs[0]);",
      },
    ],
    snippetFile: "fetchUsers.js",
    snippet:
      "const API = \"https://jsonplaceholder.typicode.com/users\";\n\nasync function getActiveUsers(minId = 1) {\n  const response = await fetch(API);\n  if (!response.ok) {\n    throw new Error(`Request failed: ${response.status}`);\n  }\n  const users = await response.json();\n\n  return users\n    .filter((user) => user.id >= minId)\n    .map(({ id, name, email }) => ({ id, name, email }));\n}\n\ngetActiveUsers(5)\n  .then((users) => {\n    console.log(`Loaded ${users.length} users`);\n    users.forEach((u) => console.log(\"-\", u.name));\n  })\n  .catch((err) => console.error(\"Oops:\", err.message));",
    timeline: [
      { year: "1995", event: "Brendan Eich writes the first version in ten days at Netscape." },
      { year: "2009", event: "Node.js brings JavaScript to the server; npm is born." },
      { year: "2013", event: "React open-sourced — UI becomes a function of state." },
      { year: "2015", event: "ES6 modernizes everything: classes, modules, promises, arrow functions." },
      { year: "Today", event: "The most used language on Earth, from browsers to servers to space." },
    ],
    useCases: [
      { title: "Frontend Web", detail: "The only language browsers run natively — every interactive page uses it." },
      { title: "Servers & APIs", detail: "Node.js powers backends at Netflix, PayPal and LinkedIn." },
      { title: "Mobile & Desktop", detail: "React Native and Electron ship JS apps to phones and desktops." },
      { title: "Everything Else", detail: "CLIs, IoT devices, game mods, browser extensions — JS is everywhere." },
    ],
    pros: [
      "Unavoidable for the web — a guaranteed, enormous job market.",
      "Instant feedback loop: write, refresh, see it live.",
      "npm is the largest package ecosystem ever created.",
    ],
    cons: [
      "Weak typing produces infamous surprises (\"11\" + 1, NaN === NaN...).",
      "The ecosystem churns fast — frameworks rise and fall yearly.",
      "Inconsistent legacy APIs accumulated over 30 years of the web.",
    ],
  },
  {
    slug: "typescript",
    name: "TypeScript",
    icon: "typescript",
    iconComponent: SiTypescript,
    prismLang: "typescript",
    tagline: "JavaScript that scales.",
    brief:
      "JavaScript with a type system so expressive it feels like a second language. TypeScript caught the bugs before runtime — and quietly took over professional web development.",
    year: "2012",
    creator: "Anders Hejlsberg · Microsoft",
    paradigm: "Multi-paradigm, Structural Typing",
    typing: "Static (optional), Strongly Typed",
    stats: [
      { label: "Popularity", value: 90 },
      { label: "Beginner Friendliness", value: 65 },
      { label: "Raw Performance", value: 70 },
      { label: "Job Demand", value: 94 },
    ],
    description: [
      "By 2012, teams were building million-line JavaScript codebases and drowning. Anders Hejlsberg's answer was TypeScript: a strict superset of JavaScript with a structural type system layered on top. Every valid JS file is already valid TypeScript — you add types where they pay off.",
      "The type system turned out to be a marvel in its own right. Union types, generics, mapped types and conditional types let developers encode astonishing guarantees that the compiler verifies before a single line runs. Editors gained autocomplete and refactoring that feel almost psychic.",
      "Adoption was slow, then sudden. Today TypeScript is the default for professional frontend work, the backbone of frameworks like Angular and Next.js, and one of the fastest-growing languages ever measured.",
    ],
    basics: [
      {
        title: "Typed Variables",
        note: "Types are annotations — erased at compile time, gone at runtime.",
        code: "const name: string = \"Anders\";\nlet age: number = 64;\nconst langs: string[] = [\"ts\", \"js\"];",
      },
      {
        title: "Interfaces & Types",
        note: "Describe the shape of your data once; the compiler enforces it forever.",
        code: "interface Developer {\n  name: string;\n  year: number;\n  active?: boolean;\n}",
      },
      {
        title: "Union Types",
        note: "A value can be one of several shapes — and you must handle each.",
        code: "type Status = \"idle\" | \"loading\" | \"done\";\n\nfunction label(s: Status) {\n  return s === \"done\" ? \"✓\" : \"…\";\n}",
      },
      {
        title: "Generics",
        note: "Write code that works with any type while keeping full safety.",
        code: "function first<T>(items: T[]): T | undefined {\n  return items[0];\n}\n\nconst n = first([1, 2, 3]); // number | undefined",
      },
    ],
    snippetFile: "apiClient.ts",
    snippet:
      "interface User {\n  id: number;\n  name: string;\n  email: string;\n}\n\ntype Result<T> =\n  | { ok: true; data: T }\n  | { ok: false; error: string };\n\nasync function fetchUser(id: number): Promise<Result<User>> {\n  try {\n    const res = await fetch(`https://api.example.com/users/${id}`);\n    if (!res.ok) return { ok: false, error: `HTTP ${res.status}` };\n    const data: User = await res.json();\n    return { ok: true, data };\n  } catch (err) {\n    return { ok: false, error: (err as Error).message };\n  }\n}\n\nconst result = await fetchUser(42);\n\nif (result.ok) {\n  console.log(`Welcome back, ${result.data.name}`);\n} else {\n  console.error(`Failed to load user: ${result.error}`);\n}",
    timeline: [
      { year: "2012", event: "Microsoft open-sources TypeScript 0.8." },
      { year: "2016", event: "Angular 2 bets entirely on TypeScript — adoption accelerates." },
      { year: "2018", event: "Conditional types arrive; the type system becomes Turing-complete." },
      { year: "2020", event: "TypeScript crosses 80% usage among professional JS developers in surveys." },
      { year: "Today", event: "The default choice for serious web applications everywhere." },
    ],
    useCases: [
      { title: "Large Frontend Apps", detail: "React, Angular, Vue — typed props and state catch bugs at build time." },
      { title: "Node.js Backends", detail: "Shared types between client and server end whole classes of API bugs." },
      { title: "Framework & Library Code", detail: "Next.js, NestJS and most modern tools are written in TypeScript." },
      { title: "Developer Tooling", detail: "VS Code itself is TypeScript — and its IntelliSense runs on the compiler." },
    ],
    pros: [
      "Catches entire categories of bugs before the code ever runs.",
      "World-class autocomplete, refactoring and inline documentation.",
      "Adopts gradually — start with one file, type only what matters.",
    ],
    cons: [
      "A build step is required — no more 'just open the file in a browser'.",
      "Complex generic errors can read like a compiler's fever dream.",
      "Types describe reality only as well as you write them — garbage in, confidence out.",
    ],
  },
];

export const getLanguage = (slug) => languages.find((l) => l.slug === slug);

export const getAdjacent = (slug) => {
  const idx = languages.findIndex((l) => l.slug === slug);
  return {
    prev: languages[(idx - 1 + languages.length) % languages.length],
    next: languages[(idx + 1) % languages.length],
  };
};
