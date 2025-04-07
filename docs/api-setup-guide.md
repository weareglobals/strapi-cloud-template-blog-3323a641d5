# Guia de Configuração da API Strapi

## 1. Criar Token de API

1. Acesse o painel administrativo do Strapi
2. Vá para Settings > API Tokens
3. Clique em "Create new API Token"
4. Configure o token:
   - Name: `api-consumer`
   - Description: `Token para consumo da API`
   - Token duration: `Unlimited`
   - Token type: `Full access`

## 2. Configurar Permissões

Para cada content-type, configure as seguintes permissões:

### Blog Posts

- find: ✅
- findOne: ✅
- create: ❌
- update: ❌
- delete: ❌

### Categories

- find: ✅
- findOne: ✅
- create: ❌
- update: ❌
- delete: ❌

### Success Cases

- find: ✅
- findOne: ✅
- create: ❌
- update: ❌
- delete: ❌

### Job Positions

- find: ✅
- findOne: ✅
- create: ❌
- update: ❌
- delete: ❌

## 3. Como Usar o Token

Adicione o token no header das requisições:

```bash
curl -H "Authorization: Bearer seu-token-aqui" http://seu-strapi/api/blog-posts
```

## 4. Endpoints Disponíveis

### Blog Posts

- GET /api/blog-posts
- GET /api/blog-posts/:id

### Categories

- GET /api/categories
- GET /api/categories/:id

### Success Cases

- GET /api/success-cases
- GET /api/success-cases/:id

### Job Positions

- GET /api/job-positions
- GET /api/job-positions/:id

## 5. Exemplos de Uso

### Buscar todos os posts

```bash
curl -H "Authorization: Bearer seu-token-aqui" http://seu-strapi/api/blog-posts
```

### Buscar um post específico

```bash
curl -H "Authorization: Bearer seu-token-aqui" http://seu-strapi/api/blog-posts/1
```

### Buscar posts com filtros

```bash
curl -H "Authorization: Bearer seu-token-aqui" "http://seu-strapi/api/blog-posts?filters[category][name][$eq]=Tecnologia"
```

### Buscar posts com população de relacionamentos

```bash
curl -H "Authorization: Bearer seu-token-aqui" "http://seu-strapi/api/blog-posts?populate=*"
```
