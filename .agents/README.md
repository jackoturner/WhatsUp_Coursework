# Rules and skills

The repository rules and six skills supplied by the repository owner are stored
here. The root `AGENTS.md` directs assistants to consult them.

```text
AGENTS.md                         Shared entry point at the repository root
.agents/
  rules/
    repository-rules.md           Supplied repository rules
  skills/
    <skill-name>/
      SKILL.md                    Your skill instructions
```

## Installed skills

- [senior-software-developer](skills/senior-software-developer/SKILL.md)
- [frontend-react-typescript](skills/frontend-react-typescript/SKILL.md)
- [backend-python-fastapi](skills/backend-python-fastapi/SKILL.md)
- [git-workflow](skills/git-workflow/SKILL.md)
- [security-engineering](skills/security-engineering/SKILL.md)
- [testing-quality](skills/testing-quality/SKILL.md)

Folder names match each skill's `name` in its YAML frontmatter. Skill contents
are preserved from the supplied documents. The supplied `AGENTS.md` is stored as
[repository-rules.md](rules/repository-rules.md), with its skill paths updated to
the repository layout. Paths listed in that rules document are relative to the
repository root.

## Adding more instructions

Add further rules as Markdown files under `rules/`. For each new skill, create
`skills/<skill-name>/SKILL.md` with YAML frontmatter containing a `name` and
`description`, followed by its instructions. Supporting scripts, references, or
assets can live beside it.

The root `AGENTS.md` directs assistants to read applicable rules and skills.
`CLAUDE.md`, `GEMINI.md`, and `.github/copilot-instructions.md` point to the same
entry point for tools that use those filenames.

Automatic discovery depends on the editor or agent and its settings. If your
tool does not load these files automatically, configure its project instructions
to read the root `AGENTS.md`. Restart or refresh the agent session after adding
or changing instructions.
